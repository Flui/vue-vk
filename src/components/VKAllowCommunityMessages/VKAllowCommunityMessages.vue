<template>
  <div id="vk_allow_messages_from_community"></div>
</template>

<script>
import { injectVKOpenApi } from "../../core";

export default {
  props: {
    groupId: {
      type: Number,
      isRequired: true
    },
    height: {
      type: Number
    }
  },
  mounted() {
    injectVKOpenApi().then(() => {
      const { groupId, height } = this;
      const options = {
        height,
      };

      VK.Widgets.AllowMessagesFromCommunity(
        "vk_allow_messages_from_community",
        options,
        groupId
      );
    });
  }
};
</script>

