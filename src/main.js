import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage/MainPage.vue'



const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'Home',
            path:'/',
            component: MainPage
        },

    ]
})

createApp(App).use(router).mount('#app')
