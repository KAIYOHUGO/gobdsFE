import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import '@/css/custom.sass';
import { store } from '@/js/store';
createApp(App).use(store).mount('#app');