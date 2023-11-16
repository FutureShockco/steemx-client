import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./state/store";
import BootstrapVueNext from 'bootstrap-vue-next';
import i18n from './i18n';
import VueApexCharts from "vue3-apexcharts";
import { vMaska } from "maska";
import mixins from '@/mixins';
import './assets/scss/app.scss';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'simplebar/dist/simplebar.min.css';


// FakeBackend authentication
// import { configureFakeBackend } from './helpers/fake-backend';
// configureFakeBackend();


// Firebase authentication
// import { initFirebaseBackend } from './authUtils';

// const firebaseConfig = {
//     apiKey: process.env.VUE_APP_APIKEY,
//     authDomain: process.env.VUE_APP_AUTHDOMAIN,
//     databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
//     projectId: process.env.VUE_APP_PROJECTId,
//     storageBucket: process.env.VUE_APP_STORAGEBUCKET,
//     messagingSenderId: process.env.VUE_APP_MEASUREMENTID
// };

// initFirebaseBackend(firebaseConfig);

createApp(App)
    .use(router)
    .use(store)
    .use(BootstrapVueNext)
    .use(i18n)
    .use(VueApexCharts)
    .directive("maska", vMaska)
    .mixin(mixins)
    .mount('#app');
