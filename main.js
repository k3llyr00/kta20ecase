let el = document.getElementById('title');
el.innerHTML = "Hello pure js";


import Vue from 'vue/dist/vue.common.js';

import Demo from './demo.vue';
Vue.component('demo', Demo);

let app = new Vue({
    el: '#app',
    data: {
        message: "hello vue"
    }
});