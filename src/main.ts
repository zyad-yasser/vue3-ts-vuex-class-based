import store from '@/store';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import './styles/global.sass';
import { VueHammer } from './plugins/vue-hammer';

const app = createApp(App)
  .use(router)
  .use(store)
  .use(VueHammer);

router.isReady().then(() => {
  app.mount('#app');
});
