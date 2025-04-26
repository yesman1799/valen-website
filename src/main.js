import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import Intersect from './directives/intersect.js'

const app = createApp(App)

app.directive('intersect', Intersect)

app.use(router).mount('#app')
