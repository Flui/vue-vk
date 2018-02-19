import VKAllowCommunityMessages from './VKAllowCommunityMessages.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKAllowCommunityMessages.name, VKAllowCommunityMessages);
  },
};

export default plugin;
