<template>
  <div id="vk_share_button"></div>
</template>

<script>
import { injectVKShareApi } from '../../core';
import { ShareButtonType } from './constants';

export default {
  name: 'vk-share',
  props: {
    type: {
      type: String,
      isRequired: true,
      default: ShareButtonType.BUTTON
    },
    text: {
      type: String,
      isRequired: true,
      default: 'Share',
    },
  },
  mounted() {
    const { type, text } = this;
    console.log('type', type);
    injectVKShareApi().then(() => {
      document
        .getElementById("vk_share_button")
        .innerHTML = VK.Share.button(false, { type , text });
    });
  }
};
</script>

