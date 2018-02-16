<template>
  <div id="vk_contact_us"></div>
</template>

<script>
import { injectVKOpenApi } from "../../core";

export default {
  props: {
    ownerId: {
      type: Number,
      isRequired: true
    },
    buttonText: {
      type: String
    },
    buttonHeight: {
      type: Number,
      default: 24,
      validator: value => [22, 24, 30].includes(value)
    }
  },
  mounted() {
    const { ownerId, buttonText, buttonHeight } = this;
    injectVKOpenApi().then(() => {
      const options = {
        text: buttonText,
        height: buttonHeight
      };
      VK.Widgets.ContactUs("vk_contact_us", options, ownerId);
    });
  }
};
</script>

