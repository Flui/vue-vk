import VKPlaylist from './VKPlaylist.vue';

const plugin = {
  install(Vue) {
    Vue.component(VKPlaylist.name, VKPlaylist);
  },
};

export default plugin;
