import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import VueEasyLightbox from 'vue-easy-lightbox';

import './assets/main.css';

import enUS from './assets/i18n/en-US.json';
import thTH from './assets/i18n/th-TH.json';

type MessageSchema = typeof enUS;

const i18n = createI18n<[MessageSchema], 'en-US' | 'th-TH'>({
  globalInjection: true,
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'th',
  messages: {
    'en-US': enUS,
    'th-TH': thTH,
  },
});

const app = createApp(App);

app.use(i18n);
app.use(VueEasyLightbox);
app.use(router);
app.use(createPinia());

app.mount('#app');
