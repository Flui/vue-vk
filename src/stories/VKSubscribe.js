import { select, number, boolean } from '@storybook/addon-knobs/vue';
import { swapKeyValue } from '../core/utils';
import VKSubscribe from '../components/VKSubscribe';
import markdown from '../components/VKSubscribe/VKSubscribe.md';

const { SubscribeMode } = VKSubscribe;

export const note = markdown;

export const story = () => {
  const ownerId = number('owner id', 465805227);
  const mode = select('mode', swapKeyValue(SubscribeMode), SubscribeMode.BUTTON);
  const showAuthor = boolean('show the author', true);
  const widgetWidth = number('width', 0, { min: 200 });
  return {
    components: { VKSubscribe },
    template: `<vk-subscribe
      :ownerId="${ownerId}"
      :mode="${mode}"
      :showAuthor="${showAuthor}"
      :widgetWidth="${widgetWidth}"
    ></vk-subscribe>`,
  };
};
