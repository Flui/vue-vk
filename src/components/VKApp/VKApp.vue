<template>
  <div :id="`vk_app_${appId}`"></div>
</template>

<script>
import { injectVKOpenApi } from '../../core';

export default {
  name: 'vk-app',
  props: {
    appId: {
      type: Number,
      required: true,
    },
    mode: {
      type: Number,
      default: 1,
    },
    buttonHeight: {
      type: Number,
    }
  },
  mounted() {
    const { appId, mode, buttonHeight } = this;
    injectVKOpenApi().then(() => {
      const options = {
        mode,
        height: buttonHeight,
      }
      VK.Widgets.App(`vk_app_${appId}`, appId, options);
    })
  },
}
</script>
