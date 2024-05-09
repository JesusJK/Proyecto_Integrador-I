
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import OtraPagina from './components/Formulario.vue';
import './style.css';

const routes = [
    { path: '/', component: App },
    { path: '/otra-pagina', component: OtraPagina }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');



