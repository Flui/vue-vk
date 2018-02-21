import { text, number, select } from '@storybook/addon-knobs/vue';
import VKContact from '../components/VKContact';
import markdown from '../components/VKContact/VKContact.md';

export const note = markdown;

export const story = () => {
  const ownerId = number('owner id', -20003922);
  const buttonText = text('button text', 'contact us');
  const buttonHeight = select('button height', {
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    30: '30px',
  }, 18);
  return {
    components: { VKContact },
    template: `<vk-contact
      :ownerId="${ownerId}"
      buttonText="${buttonText}"
      :buttonHeight="${buttonHeight}"
    ></vk-contact>`,
  };
};
