import { text, number, select, boolean } from '@storybook/addon-knobs/vue';
import VKComments from '../components/VKComments';
import markdown from '../components/VKComments/VKComments.md';

export const note = markdown;

export const story = () => {
  const width = number('width', 0);
  const height = number('height', 0);
  const limit = number('limit', 10, { min: 5, max: 100 });
  const attach = select('attach', {
    '*': '*',
    graffiti: 'graffiti',
    photo: 'photo',
    audio: 'audio',
    video: 'video',
    link: 'link',
  }, '*');
  const autoPublish = boolean('autoPublish', false);
  const mini = select('mini', {
    1: 'enabled',
    0: 'disabled',
    auto: 'auto',
  }, 'auto');
  const norealtime = boolean('norealtime', false);
  const pageUrl = text('pageUrl', '');
  const pageId = text('pageId', '');

  return {
    components: { VKComments },
    template: `<vk-comments
      :width="${width}"
      :height="${height}"
      :limit="${limit}"
      attach="${attach}"
      :autoPublish="${autoPublish}"
      :mini="${mini}"
      :norealtime="${norealtime}"
      pageUrl="${pageUrl}"
      pageId="${pageId}"
    ></vk-comments>`,
  };
};
