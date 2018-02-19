import VKPost from './VKPost.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKPost.name, VKPost);
  },
};

export default plugin;
