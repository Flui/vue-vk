import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import {
  VKAllowCommunityMessages,
  VKApp,
  VKAuthorization,
  VKComments,
  VKCommunity,
  VKCommunityMessages,
  VKContact,
  VKLike,
  VKPlaylist,
  VKPolls,
  VKPost,
  VKRecommendations,
  VKShare,
  VKSubscribe,
} from '../src/components/';

// Register custom components.
Vue.component('vk-allow-messages', VKAllowCommunityMessages);
Vue.component('vk-app', VKApp);
Vue.component('vk-auth', VKAuthorization);
Vue.component('vk-comments', VKComments);
Vue.component('vk-community', VKCommunity);
Vue.component('vk-messages', VKCommunityMessages);
Vue.component('vk-contact', VKContact);
Vue.component('vk-like', VKLike);
Vue.component('vk-playlist', VKPlaylist);
Vue.component('vk-polls', VKPolls);
Vue.component('vk-post', VKPost);
Vue.component('vk-recommendations', VKRecommendations);
Vue.component('vk-share', VKShare);
Vue.component('vk-subscribe', VKSubscribe);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);