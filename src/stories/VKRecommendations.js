import { number } from '@storybook/addon-knobs/vue';
import VKRecommendations from '../components/VKRecommendations';
import markdown from '../components/VKRecommendations/VKRecommendations.md';

export const note = markdown;

export const story = () => {
  const limit = number('limit', 5);
  const max = number('max', 20);
  // TODO: add other knobs
  return {
    components: { VKRecommendations },
    template: `<vk-recommendations
      :limit="${limit}"
      :max="${max}"
    ></vk-recommendations>`,
  };
};
