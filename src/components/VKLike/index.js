import VKLike from './VKLike.vue';
import { LikeButtonType } from './constants';

const plugin = {
  install(Vue) {
    Vue.component(VKLike.name, VKLike);
  },
  LikeButtonType,
};

export default plugin;
