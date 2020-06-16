import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login'

import dashboard from "./admin/dashboard";
import users from "./admin/users";
import incubadoras from "./admin/incubadoras";
import ovoscopio from "./admin/ovoscopio";
import eclosion from "./admin/eclosion";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/reportes',
            name: 'reportes',
            component: dashboard,
        },
        {
            path: '/users',
            name: 'users',
            component: users,
        },
        {
            path: '/incubadoras',
            name:'incubadoras',
            component: incubadoras,
        },
        {
            path: '/ovoscopio',
            name: 'ovoscopio',
            component: ovoscopio,
        },
        {
            path: '/eclosion',
            name: 'eclosion',
            component: eclosion,
        }
    ]
})
