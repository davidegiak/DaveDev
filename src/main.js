import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { router } from './router.js';
import App from './viewa/Main.vue'

createApp(App).use(router).mount('#app')
