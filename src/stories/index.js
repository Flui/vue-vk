import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs/vue';
import { withNotes } from '@storybook/addon-notes';

import { story as AllowCommunityMessagesStory, note as AllowCommunityMessagesNotes } from './VKAllowCommunityMessages';
import { story as AppStory, note as AppNotes } from './VKApp';
import { story as AuthorizationStory, note as AuthorizationNotes } from './VKAuthorization';
import { story as CommentsStory, note as CommentsNotes } from './VKComments';
import { story as CommunityStory, note as CommunityNotes } from './VKCommunity';
import { story as CommunityMessagesStory, note as CommunityMessagesNotes } from './VKCommunityMessages';
import { story as ContactStory, note as ContactNotes } from './VKContact';
import { story as LikeStory, note as LikeNotes } from './VKLike';
import { story as PlaylistStory, note as PlaylistNotes } from './VKPlaylist';
import { story as PollsStory, note as PollsNotes } from './VKPolls';
import { story as PostStory, note as PostNotes } from './VKPost';
import { story as RecommendationsStory, note as RecommendationsNotes } from './VKRecommendations';
import { story as ShareStory, note as ShareNotes } from './VKShare';
import { story as SubscribeStory, note as SubscribeNotes } from './VKSubscribe';

storiesOf('VK widgets', module)
  .addDecorator(withKnobs)
  .add('VKApp', withNotes(AppNotes)(AppStory))
  .add('VKAllowCommunityMessages', withNotes(AllowCommunityMessagesNotes)(AllowCommunityMessagesStory))
  .add('VKCommunity', withNotes(CommunityNotes)(CommunityStory))
  .add('VKCommunityMessages', withNotes(CommunityMessagesNotes)(CommunityMessagesStory))
  .add('VKContact', withNotes(ContactNotes)(ContactStory))
  .add('VKPlaylist', withNotes(PlaylistNotes)(PlaylistStory))
  .add('VKPolls', withNotes(PollsNotes)(PollsStory))
  .add('VKPost', withNotes(PostNotes)(PostStory))
  .add('VKShare', withNotes(ShareNotes)(ShareStory))
  .add('VKSubscribe', withNotes(SubscribeNotes)(SubscribeStory));

storiesOf('VK widgets (WIP)', module)
  .addDecorator(withKnobs)
  .add('VKAuthorization', withNotes(AuthorizationNotes)(AuthorizationStory))
  .add('VKComments', withNotes(CommentsNotes)(CommentsStory))
  .add('VKLike', withNotes(LikeNotes)(LikeStory))
  .add('VKRecommendations', withNotes(RecommendationsNotes)(RecommendationsStory));

