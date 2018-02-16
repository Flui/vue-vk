import { text, select } from '@storybook/addon-knobs/vue';
import { swapKeyValue } from '../core/utils';
import VKShare, { VKShareButtonType } from '../components/VKShare';
import markdown from '../components/VKShare/VKShare.md';

export const note = markdown;

export const story = () => {
  const type = select('type', swapKeyValue(VKShareButtonType), VKShareButtonType.BUTTON);
  const buttonText = text('text', 'Share');
  return {
    components: { VKShare },
    template: `<vk-share type="${type}" text="'${buttonText}'"></vk-share>`,
  };
};
