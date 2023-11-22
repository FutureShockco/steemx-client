import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./state/store";
import BootstrapVueNext from 'bootstrap-vue-next';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import i18n from './i18n';
import VueApexCharts from "vue3-apexcharts";
import { vMaska } from "maska";
import mixins from '@/mixins';
import ws from '@/helpers/kbyte';
import './assets/scss/app.scss';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'simplebar/dist/simplebar.min.css';



setInterval(() => ws.request('heartbeat', null), 10 * 1000);

const app = createApp(App)
    .use(router)
    .use(store)
    .use(BootstrapVueNext)
    .use(i18n)
    .use(VueApexCharts)
    .directive("maska", vMaska)
    .mixin(mixins)

const requireComponent = require.context('./components', true, /[\w-]+\.vue$/);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')));
    app.component(componentName, componentConfig.default || componentConfig);
});

app.mount('#app');
