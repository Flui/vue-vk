import VKComments from './VKComments.vue';
import { AttachmentTypes } from './constants';

const plugin = {
  install(Vue) {
    Vue.component(VKComments.name, VKComments);
  },
  AttachmentTypes,
};

export default plugin;
