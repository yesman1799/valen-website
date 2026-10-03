<?php
// Kontaktní formulář valen.cz – přijme JSON z Vue (ContactView.vue) a odešle e-mail.
// Vite tento soubor při buildu zkopíruje do dist/, na hostingu pak leží vedle index.html.

declare(strict_types=1);

// Kam mají zprávy chodit:
const PRIJEMCE   = 'valen@centrum.cz';
// Odesílatel MUSÍ být adresa na doméně webu (kvůli SPF/DKIM), ideálně existující schránka.
const ODESILATEL = 'web@valen.cz';

header('Content-Type: application/json; charset=utf-8');

function odpoved(int $kod, array $data): void
{
    http_response_code($kod);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    odpoved(405, ['ok' => false, 'message' => 'Nepovolená metoda.']);
}

$vstup = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($vstup)) {
    odpoved(400, ['ok' => false, 'message' => 'Neplatná data.']);
}

// Honeypot: vyplněné skryté pole = robot. Tváříme se, že je vše v pořádku.
if (!empty($vstup['hp_field'])) {
    odpoved(200, ['ok' => true]);
}

$jmeno  = trim((string)($vstup['name'] ?? ''));
$email  = trim((string)($vstup['email'] ?? ''));
$zprava = trim((string)($vstup['message'] ?? ''));

if (mb_strlen($jmeno) < 2 || mb_strlen($jmeno) > 80) {
    odpoved(422, ['ok' => false, 'message' => 'Zadejte jméno.']);
}
if (mb_strlen($email) > 150 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    odpoved(422, ['ok' => false, 'message' => 'Zadejte platný e-mail.']);
}
if (mb_strlen($zprava) < 10 || mb_strlen($zprava) > 3000) {
    odpoved(422, ['ok' => false, 'message' => 'Zpráva musí mít 10 až 3000 znaků.']);
}

// Ochrana proti vkládání hlaviček
$jmeno = str_replace(["\r", "\n"], ' ', $jmeno);
$email = str_replace(["\r", "\n"], '', $email);

$predmet = '=?UTF-8?B?' . base64_encode('Zpráva z webu Valen.cz — ' . $jmeno) . '?=';

$telo = "Jméno: {$jmeno}\n"
      . "E-mail: {$email}\n"
      . "---\n"
      . "{$zprava}\n";

$hlavicky = [
    'From: =?UTF-8?B?' . base64_encode('Web Valen.cz') . '?= <' . ODESILATEL . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

$odeslano = mail(PRIJEMCE, $predmet, $telo, implode("\r\n", $hlavicky), '-f' . ODESILATEL);

if (!$odeslano) {
    odpoved(500, ['ok' => false, 'message' => 'Nepodařilo se odeslat e-mail. Zkuste to prosím později.']);
}

odpoved(200, ['ok' => true]);
