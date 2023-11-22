import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./state/store";
import BootstrapVueNext from 'bootstrap-vue-next';
import i18n from './i18n';
import VueApexCharts from "vue3-apexcharts";
import { vMaska } from "maska";
import mixins from '@/mixins';
import ws from '@/helpers/kbyte';
import './assets/scss/app.scss';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'simplebar/dist/simplebar.min.css';

setInterval(() => ws.request('heartbeat', null), 10 * 1000);

createApp(App)
    .use(router)
    .use(store)
    .use(BootstrapVueNext)
    .use(i18n)
    .use(VueApexCharts)
    .directive("maska", vMaska)
    .mixin(mixins)
    .mount('#app');
