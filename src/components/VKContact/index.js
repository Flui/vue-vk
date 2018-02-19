import VKContact from './VKContact.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKContact.name, VKContact);
  },
};

export default plugin;
