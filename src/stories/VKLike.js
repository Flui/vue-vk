import { number, select } from '@storybook/addon-knobs/vue';
import { swapKeyValue } from '../core/utils';
import VKLike, { VKLikeButtonType } from '../components/VKLike';
import markdown from '../components/VKLike/VKLike.md';

export const note = markdown;

export const story = () => {
  const buttonHeight = number('height', null);
  const buttonType = select('type', swapKeyValue(VKLikeButtonType), VKLikeButtonType.BUTTON_WITH_MINI_COUNTER);
  const thisIsInteresting = select('Button Text', {
    true: 'This is interesting',
    false: 'Like',
  }, 'false');
  return {
    components: { VKLike },
    template: `<vk-like :buttonHeight=${buttonHeight} buttonType="${buttonType}" :thisIsInteresting="${thisIsInteresting}"></vk-like>`,
  };
};
