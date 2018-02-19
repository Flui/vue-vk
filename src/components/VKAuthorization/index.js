import VKAuthorization from './VKAuthorization.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKAuthorization.name, VKAuthorization);
  },
};

export default plugin;
