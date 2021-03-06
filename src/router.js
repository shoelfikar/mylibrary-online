import vue from 'vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'

import Login from './view/main/login.vue';
import FormRegister from './view/main/Form-Register.vue'
import Dashbord from './view/main/Dashbord.vue'
import DetailBook from './view/main/DetailBook.vue'
import Activate from './view/main/Activate.vue'
import History from './view/main/History.vue'



vue.use(VueRouter);
vue.use(Vuelidate);

const routes = [
        {
            path: '/',
            name: 'Dashbord',
            component: Dashbord,
        },
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/auth',
                name: 'Activate',
                component: Activate
            },
            {
                path: '/register',
                name: 'FormRegister',
                component: FormRegister
            },
            {
                path: '/history',
                name: 'History',
                component: History,
            },
            {
                path: '/detail/:idBook',
                name: 'DetailBook',
                component: DetailBook,
                props: true
            }
];

const router = new VueRouter({
    mode: 'history',
    routes
});
export default router

