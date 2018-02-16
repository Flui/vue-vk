import { text, number } from '@storybook/addon-knobs/vue';
import VKAuthorization from '../components/VKAuthorization';
import markdown from '../components/VKAuthorization/VKAuthorization.md';

export const note = markdown;

export const story = () => {
  const width = number('width', 400);
  const authUrl = text('Authorization URL', '/');
  return {
    components: { VKAuthorization },
    template: `<vk-auth :width="${width}" :authUrl="'${authUrl}'"></vk-auth>`,
  };
};
