<template>
  <div id="vk_recommended"></div>
</template>

<script>
import { injectVKOpenApi, initVK } from "../../core";

export default {
  name: 'vk-recommendations',
  props: {
    limit: {
      type: Number,
      default: 5,
      validator: value => value > 0,
    },
    max: {
      type: Number,
    },
    period: {
      type: String,
      default: 'week',
      validator: value => ['day', 'week', 'month'].includes(value),
    },
    itIsIteresting: {
      type: Boolean,
      default: false,
    },
    sortBy: {
      type: String,
      default: 'friend_likes',
      validator: value => ['friend_likes', 'likes'].includes(value),
    },
    target: {
      type: String,
      default: 'parent',
      validator: value => ['blank', 'top', 'parent'].includes(value),
    }
  },
  mounted() {
    const { limit, max, period, itIsIteresting, sortBy, target } = this;
    injectVKOpenApi()
      .then(initVK(true))
      .then(() => {
        const options = {
          limit,
          max,
          period,
          verb: itIsIteresting ? 1 : 0,
          sort: sortBy,
          target: target,
        };
        VK.Widgets.Recommended("vk_recommended", options);
      });
  }
};
</script>

