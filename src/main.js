// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import http from "../src/api/http.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import utils from './utils/utils.js';
import store from "./store/index.js";
import filtres from "./filtres/index.js";
import $ from 'jquery'


Vue.config.productionTip = false
Vue.prototype.$http = http;
Vue.prototype.utils = utils;


Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    http,
    store,
    components: {
        App
    },
    template: '<App/>'
})
