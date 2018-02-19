import VKCommunityMessages from './VKCommunityMessages.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKCommunityMessages.name, VKCommunityMessages);
  },
};

export default plugin;
