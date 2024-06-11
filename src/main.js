
import { createApp } from 'vue'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import router from './router/index.js'
// import 'bootstrap/dist/js/bootstrap.bundle'
// import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(router).mount('#app')
