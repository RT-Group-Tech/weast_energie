import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js';
import Vuex from 'vuex';


import storeData from './store/store.js';
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VueEasyLightbox from 'vue-easy-lightbox';

import * as VueGoogleMaps from 'vue2-google-maps';
import VGoogleTranslate from 'v-google-translate';
import * as VueAos from 'vue-aos';


Vue.use(VGoogleTranslate);
Vue.use(VueAos)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBOhR1DN86dsEZORUs5yA-P8JhPGGJnL0I',
        libraries: 'places', // This is required if you use the Autocomplete plugin
    },
});

Vue.config.productionTip = false;

//api instance
var instance = axios.create({
    baseURL: 'http://weast-energie.com/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});
Vue.prototype.$axios = instance;

//vue using
Vue.use(VueEasyLightbox)
Vue.use(Vuex);
Vue.use(VueSweetalert2);
Vue.filter('sortlength', function(text, length, suffix) {
    return text.substring(0, length) + suffix;
});

// Method 2. Register via Vue.component
Vue.component(VueEasyLightbox.name, VueEasyLightbox);
Vue.component('g-card', require('./components/widgets/g_card.vue').default);

const store = new Vuex.Store(storeData);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');