import Module from './Module/Module.vue';
import { state } from './mongo';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const install: any = (Vue: any, options: any) => {
  if (install.installed) return;
  install.installed = true;
  state.dbType = 'plugin';
  Vue.component('pdk-module', {
    Module
  });
};

export default { install };
const plugin = {
  install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
