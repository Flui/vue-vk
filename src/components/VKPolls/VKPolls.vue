<template>
  <div id="vk_poll"></div>
</template>

<script>
import { injectVKOpenApi, initVK } from "../../core";

export default {
  props: {
    pollId: {
      type: String,
      isRequired: true
    },
    widgetWidth: {
      type: Number,
      validator: value => !value || value >= 300,
    },
    pageUrl: {
      type: String,
    },
  },
  mounted() {
    const { pollId, widgetWidth, pageUrl } = this;
    injectVKOpenApi()
      .then(initVK())
      .then(() => {
        const options = {
          width: widgetWidth,
          pageUrl,
        };
        VK.Widgets.Poll("vk_poll", options, pollId);
      });
  }
};
</script>

