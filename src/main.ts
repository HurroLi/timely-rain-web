// import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'

createApp(App).use(router).use(ElementPlus).use(axios).mount('#app')
