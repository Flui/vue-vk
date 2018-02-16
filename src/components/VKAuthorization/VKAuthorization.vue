<template>
  <div id="vk_auth"></div>
</template>

<script>
import { injectVKOpenApi, initVK } from "../../core";

export default {
  props: {
    /*
     * sets module width in pixels (integer > 300)
     */
    width: {
      type: Number,
      validator: value => !value || value > 300,
    },
    /*
     * sets action done during authorization
     * (by default it is navigation to the specified URL with necessary parameters)
     */
    onAuth: {
      type: Function,
    },
    authUrl: {
      type: String,
    },
  },
  mounted() {
    const { width, onAuth, authUrl } = this;
    const options = {
      width,
      onAuth,
      authUrl,
    };

    if (!onAuth && !authUrl) {
      throw Error('Neither onAuth (callback), nor authUrl is set.');
    }

    injectVKOpenApi()
      .then(initVK(true))
      .then(() => {
        VK.Widgets.Auth("vk_auth", options);
      });
  }
};
</script>

