import VKApp from './VKApp.vue';
import { AppMode } from './constants';

const plugin = {
  install(Vue) {
    Vue.component(VKApp.name, VKApp);
  },
  AppMode,
};


export default plugin;
