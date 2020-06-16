
require('./bootstrap');

//window.Vue = require('vue');

import Vue from 'vue'
import App from './app.vue'
import router from './router'
import vuetify from './vuetify'
import 'vuetify/dist/vuetify.min.css'
import auth from './auth'


Vue.config.productionTip= false;

axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api/`

Vue.use(auth)

new Vue({
    mode: 'history',
    vuetify,
    el: '#app',
    router,
    components:{ App },
    template: '<app/>'
});
