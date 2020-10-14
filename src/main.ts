import Vue from 'vue';
import provider from '@/vue-apollo';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

Vue.use(VueApollo);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  apolloProvider: provider,
  render: h => h(App)
}).$mount('#app');
