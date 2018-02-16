import { number, select } from '@storybook/addon-knobs/vue';
import { swapKeyValue } from '../core/utils';
import VKApp, { VKAppMode } from '../components/VKApp';
import markdown from '../components/VKApp/VKApp.md';

export const note = markdown;

export const story = () => {
  const appId = number('app id', 5327745);
  const mode = select('mode', swapKeyValue(VKAppMode), VKAppMode.CARD);
  const buttonHeight = select('button height', {
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    30: '30px',
  }, '24px');
  return {
    components: { VKApp },
    template: `<vk-app
      :appId="${appId}"
      :mode="${mode}"
      :buttonHeight="${buttonHeight}"
    ></vk-app>`,
  };
};
