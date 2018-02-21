import VKAllowCommunityMessages from './VKAllowCommunityMessages';
import VKApp from './VKApp';
import VKAuthorization from './VKAuthorization';
import VKComments from './VKComments';
import VKCommunity from './VKCommunity';
import VKCommunityMessages from './VKCommunityMessages';
import VKContact from './VKContact';
import VKLike from './VKLike';
import VKPlaylist from './VKPlaylist';
import VKPolls from './VKPolls';
import VKPost from './VKPost';
import VKRecommendations from './VKRecommendations';
import VKShare from './VKShare';
import VKSubscribe from './VKSubscribe';

const components = [
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
];

export default {
  install: (Vue) => {
    components.forEach((component) => {
      Vue.use(component);
    });
  },
};
