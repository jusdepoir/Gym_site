import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css' // ou ton chemin exact si besoin


import router from './router/index.ts'

const app = createApp(App)

app.use(router) 
app.mount('#app')
