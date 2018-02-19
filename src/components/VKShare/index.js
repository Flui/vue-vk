import VKShare from './VKShare.vue';
import { ShareButtonType } from './constants';

const plugin = {
  install(Vue) {
    Vue.component(VKShare.name, VKShare);
  },
  ShareButtonType,
};

export default plugin;
