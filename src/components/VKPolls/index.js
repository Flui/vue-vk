import VKPolls from './VKPolls.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKPolls.name, VKPolls);
  },
};

export default plugin;
