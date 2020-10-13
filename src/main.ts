import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import { createProvider } from './vue-apollo';
import { ValidationObserver, ValidationProvider } from '@/validation';

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.use(VueCompositionApi);
new Vue({
  vuetify,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
