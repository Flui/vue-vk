<template>
  <div :id="`vk_post_${ownerId}_${postId}`"></div>
</template>
<script>
import { injectVKOpenApi } from "../../core";
export default {
  props: {
    ownerId: {
      type: Number,
      isRequired: true
    },
    postId: {
      type: Number,
      isRequired: true
    },
    hash: {
      type: String,
      isRequired: true
    }
  },
  mounted() {
    const { ownerId, postId, hash } = this;
    injectVKOpenApi()
      /*
      TODO: get hash
      .then(initVK())
      .then(() => {
        getPostHash(ownerId, postId)
          .then(result => console.log("result", result))
          .catch(err => console.warn("err", err));
      })
      */
      .then(() => {
        VK.Widgets.Post(`vk_post_${ownerId}_${postId}`, ownerId, postId, hash);
      });
  }
};
</script>