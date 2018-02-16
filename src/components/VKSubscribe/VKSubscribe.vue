<template>
  <div id="vk_subscribe"></div>
</template>

<script>
import { injectVKOpenApi, initVK } from "../../core";

export default {
  props: {
    ownerId: {
      type: Number,
    },
    mode: {
      type: Number,
    },
    showAuthor: {
      type: Boolean,
      default: true,
    },
    widgetWidth: {
      type: Number,
      validator: value => !value || value >= 200,
    }
  },
  mounted() {
    const { ownerId, mode, showAuthor, widgetWidth } = this;
    injectVKOpenApi()
      .then(initVK(true))
      .then(() => {
        const options = {
          mode,
          soft: showAuthor ? 0 : 1,
          width: widgetWidth,
        };
        VK.Widgets.Subscribe("vk_subscribe", options, ownerId);
      });
  }
};
</script>

