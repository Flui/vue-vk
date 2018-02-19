import VKCommunity from './VKCommunity.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKCommunity.name, VKCommunity);
  },
};

export { VKCommunityMode } from './constants';
export default plugin;
