
<template>
  <div id="vk_like"></div>
</template>

<script>
import { injectVKOpenApi, initVK } from "../../core";

export default {
  props: {
    buttonHeight: {
      type: Number
    },
    buttonType: {
      type: String,
      default: "button"
    },
    thisIsInteresting: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const { buttonHeight, buttonType, thisIsInteresting } = this;
    injectVKOpenApi()
      .then(initVK(true))
      .then(() => {
        const options = {
          height: buttonHeight,
          type: buttonType,
          verb: thisIsInteresting ? 1 : 0
        };

        VK.Widgets.Like("vk_like", options);
      });
  }
};
</script>