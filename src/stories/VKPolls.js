import { text, number } from '@storybook/addon-knobs/vue';
import VKPolls from '../components/VKPolls';
import markdown from '../components/VKPolls/VKPolls.md';

export const note = markdown;

export const story = () => {
  const pollId = text('poll id', '6564504_c2a6ccb7df15aff473');
  const widgetWidth = number('width', 300);
  const pageUrl = text('page url', 'https://vk.com/dev/Poll');

  return {
    components: { VKPolls },
    template: `<vk-polls
      pollId="${pollId}"
      :widgetWidth="${widgetWidth}"
      pageUrl= "${pageUrl}"
    ></vk-polls>`,
  };
};
