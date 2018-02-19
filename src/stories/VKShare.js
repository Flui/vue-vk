import { text, select } from '@storybook/addon-knobs/vue';
import { swapKeyValue } from '../core/utils';
import VKShare from '../components/VKShare';
import markdown from '../components/VKShare/VKShare.md';

const { ShareButtonType } = VKShare;
export const note = markdown;

export const story = () => {
  const type = select('type', swapKeyValue(ShareButtonType), ShareButtonType.BUTTON);
  const buttonText = text('text', 'Share');
  return {
    components: { VKShare },
    template: `<vk-share type="${type}" text="'${buttonText}'"></vk-share>`,
  };
};
