import { createWebHistory, createRouter } from 'vue-router'
import login from '../views/login.vue';
import dashboard from '@/components/Principalweb.vue';
import form from '@/components/Formulario.vue'

const routes = [

    {  path: '/web', component: dashboard },
    { path: '/', component: login },
    {path: '/form', component: form}
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;