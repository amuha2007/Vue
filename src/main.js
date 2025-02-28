import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage/MainPage.vue'
import BlogPage from './components/BlogPage/Blogpage.vue'
import ContactsPage from './ContactsPage/ContactPage.vue'



const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'Home',
            path:'/',
            component: MainPage
        },
        {
            name:'BlogP',
            path:'/Blog',
            component: BlogPage
        },
        {
            name:'Contacts',
            path:'/Contacts',
            component: ContactsPage
        }

    ]
})

createApp(App).use(router).mount('#app')
