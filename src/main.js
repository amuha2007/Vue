import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage/MainPage.vue'

createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'Home',
            patch:'/',
            component: MainPage
        }

    ]
})

createApp(App).mount('#app')
