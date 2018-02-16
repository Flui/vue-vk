import { select, number } from '@storybook/addon-knobs/vue';
import VKAllowCommunityMessages from '../components/VKAllowCommunityMessages';
import markdown from '../components/VKAllowCommunityMessages/VKAllowCommunityMessages.md';

export const note = markdown;

export const story = () => {
  const height = select('height', { '22px (default)': 22, '24px': 24, '30px': 30 }, '22px (default)');
  const groupId = number('group_id (required) - community ID', 2158488);
  return {
    components: { VKAllowCommunityMessages },
    template: `<vk-allow-messages :groupId="${groupId}" :height="${parseInt(height, 10)}"></vk-allow-messages>`,
  };
};
