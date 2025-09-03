import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1); // za reverse proxy

const {
  PORT=8080,
  FRONTEND_ORIGINS='https://www.valen.cz,https://valen.cz',
  SMTP_HOST='smtp.seznam.cz',
  SMTP_PORT=465,
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO='valen2009@seznam.cz',
  MAIL_FROM=`Valen CZ <${SMTP_USER || 'no-reply@valen.cz'}>`,
  CAPTCHA_SECRET, // Cloudflare Turnstile secret
  PER_EMAIL_COOLDOWN_SECONDS=120
} = process.env;

const ALLOW = FRONTEND_ORIGINS.split(',').map(s=>s.trim()).filter(Boolean);

app.use(helmet({ contentSecurityPolicy:false }));
app.use(cors({
  origin(origin, cb) {
    if (!origin) return cb(null, false);
    cb(ALLOW.includes(origin) ? null : new Error('CORS blocked'), ALLOW.includes(origin));
  }
}));
app.use(express.json({ limit:'50kb' }));

// rate limit na endpoint
app.use('/api/contact', rateLimit({ windowMs:10*60*1000, max:5, standardHeaders:true }));

// cooldown na e-maily
const cooldown = new Map(); // email -> ts

// SMTP
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

// ověření Turnstile tokenu
async function verifyTurnstile(token){
  if (!CAPTCHA_SECRET) return true; // povol vývoj bez captcha
  if (!token) return false;
  const body = new URLSearchParams({ secret: CAPTCHA_SECRET, response: token });
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method:'POST', body });
  const d = await r.json();
  return !!d.success;
}

app.post('/api/contact', [
  body('name').trim().isLength({min:2,max:80}),
  body('email').trim().isEmail().normalizeEmail(),
  body('phone').optional({checkFalsy:true}).isLength({max:30}),
  body('message').trim().isLength({min:10,max:3000}),
  body('hp_field').custom(v => v === ''),       // honeypot musí být prázdný
  body('captchaToken').optional().isString(),   // Turnstile token
], async (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ ok:false, errors: errors.array() });

  const { name, email, phone='', message, captchaToken } = req.body;

  // captcha
  if (!(await verifyTurnstile(captchaToken))) {
    return res.status(400).json({ ok:false, message:'CAPTCHA ověření selhalo.' });
  }

  // cooldown per email
  const now = Date.now(), wait = Number(PER_EMAIL_COOLDOWN_SECONDS) * 1000;
  const last = cooldown.get(email) || 0;
  if (now - last < wait) return res.status(429).json({ ok:false, message:'Zprávy posíláte příliš často.' });
  cooldown.set(email, now);

  const subject = `Zpráva z webu Valen.cz — ${name}`;
  const text = `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone||'-'}\n---\n${message}`;
  const html = `<div style="font-family:system-ui"><h2>Nová zpráva</h2>
    <p><b>Jméno:</b> ${escape(name)}<br/><b>Email:</b> ${escape(email)}<br/><b>Telefon:</b> ${escape(phone||'-')}</p>
    <hr/><pre style="white-space:pre-wrap;font:inherit">${escape(message)}</pre></div>`;

  try {
    await transporter.sendMail({ from: MAIL_FROM, to: MAIL_TO, replyTo: email, subject, text, html });
    res.json({ ok:true });
  } catch (e) {
    res.status(500).json({ ok:false, message:'Nepodařilo se odeslat e‑mail.' });
  }
});

app.get('/healthz', (_,res)=>res.json({ok:true, ts:Date.now()}));
app.listen(PORT, ()=>console.log('API on :' + PORT));

function escape(s=''){return String(s)
  .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
  .replaceAll('"','&quot;').replaceAll("'","&#39;");}
