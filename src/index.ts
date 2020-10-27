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
