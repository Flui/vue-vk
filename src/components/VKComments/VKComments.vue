<template>
  <div id="vk_comments"></div>
</template>

<script>
import { injectVKOpenApi, initVK } from '../../core';
import { ATTACHMENT_TYPES } from './constants';

export default {
  props: {
    width: {
      type: Number,
      validator: value => !value || value >= 300
    },
    height: {
      type: Number,
      default: 0,
      validator: value => value === 0 || value >= 500
    },
    limit: {
      type: Number,
      validator: value => !value || (value >= 5 && value <= 100)
    },
    attach: {
      type: String,
      default: "*",
      validator: value => ["*", ...ATTACHMENT_TYPES].includes(value)
    },
    autoPublish: {
      type: Boolean,
      default: false
    },
    mini: {
      type: String,
      default: "auto",
      validator: value => ["0", "1", "auto"].includes(value)
    },
    norealtime: {
      type: Boolean,
      default: false
    },
    pageUrl: {
      type: String
    },
    pageId: {
      type: String
    }
  },
  mounted() {
    const {
      width,
      height,
      limit,
      attach,
      autoPublish,
      mini,
      norealtime,
      pageUrl,
      pageId
    } = this;

    const options = {
      width,
      height,
      limit,
      attach,
      autoPublish: norealtime ? 1 : 0,
      mini,
      norealtime: norealtime ? 1 : 0,
      pageUrl,
    };

    injectVKOpenApi()
      .then(initVK(true))
      .then(() => {
        VK.Widgets.Comments("vk_comments", options, pageId);
      });
  }
};
</script>

