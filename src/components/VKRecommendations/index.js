import VKRecommendations from './VKRecommendations.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKRecommendations.name, VKRecommendations);
  },
};

export default plugin;
