import VKSubscribe from './VKSubscribe.vue';
import { SubscribeMode } from './constants';

const plugin = {
  install(Vue) {
    Vue.component(VKSubscribe.name, VKSubscribe);
  },
  SubscribeMode,
};

export default plugin;
