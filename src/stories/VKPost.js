import { text, number } from '@storybook/addon-knobs/vue';
import VKPost from '../components/VKPost';
import markdown from '../components/VKPost/VKPost.md';

export const note = markdown;

export const story = () => {
  const ownerId = number('owner_id (required)', 1);
  const postId = number('post_id (required)', 45616);
  const hash = text('hash', 'Y8o_Z9lnpw1OfcYNBZevj6A0flFp');

  return {
    components: { VKPost },
    template: `<vk-post
      :ownerId="${ownerId}"
      :postId="${postId}"
      hash="${hash}"
    ></vk-post>`,
  };
};
