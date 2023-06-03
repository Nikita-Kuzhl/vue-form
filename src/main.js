import { createApp } from 'vue';
import './assets/main.scss';

import App from './App.vue';
import clickOutside from '@/directive/clickOutside';

const app = createApp(App);
app.directive('click-outside', clickOutside);
app.mount('#app');
