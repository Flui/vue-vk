import { text, number } from '@storybook/addon-knobs/vue';
import VKPlaylist from '../components/VKPlaylist';
import markdown from '../components/VKPlaylist/VKPlaylist.md';

export const note = markdown;

export const story = () => {
  const ownerId = number('owner id', -2000646569);
  const playlistId = number('playlist id', 646569);
  const hash = text('hash', 'ae82627d6c8bb4500d');
  const widgetWidth = number('width', null);

  return {
    components: { VKPlaylist },
    template: `<vk-playlist
      :ownerId="${ownerId}"
      :playlistId="${playlistId}"
      hash="${hash}"
      :widgetWidth="${widgetWidth}"
    ></vk-playlist>`,
  };
};
