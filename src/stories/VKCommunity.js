import { number, select, boolean, color } from '@storybook/addon-knobs/vue';
import { swapKeyValue } from '../core/utils';
import VKCommunity, { VKCommunityMode } from '../components/VKCommunity';
import markdown from '../components/VKCommunity/VKCommunity.md';

export const note = markdown;

export const story = () => {
  const groupId = number('groupId', 20003922);
  const width = number('width', null, { min: 300 });
  const height = number('height', null, { min: 200, max: 600 });
  const mode = select('mode', swapKeyValue(VKCommunityMode), '0');
  const wide = boolean('wide', false);
  const bcgColor = color('Background Color', '#ffffff');
  const textColor = color('Text Color', '#000000');
  const buttonColor = color('Button Color', '#888888');

  return {
    components: { VKCommunity },
    template: `<vk-community
      :groupId="${groupId}"
      :width="${width}"
      :height="${height}"
      :mode="${mode}"
      :wide="${wide}"
      bcgColor="${bcgColor}"
      textColor="${textColor}"
      buttonColor="${buttonColor}"
    ></vk-community>`,
  };
};
