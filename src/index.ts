import Module from './Module/Module.vue';
import { state } from './mongo';

function install(Vue, options) {
  if (install.installed) return;
  install.installed = true;
  state.dbType = 'plugin';
  Vue.component('pdk-module', {
    Module
  });
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

Module.install = install;

export default Module;
