<template>
  <div :id="`vk_playlist_${ownerId}_${playlistId}`"></div>
</template>

<script>
import { injectVKOpenApi } from "../../core";
export default {
  props: {
    ownerId: {
      type: Number,
      required: true,
    },
    playlistId: {
      type: Number,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    widgetWidth: {
      type: Number,
    },
  },
  mounted() {
    const { ownerId, playlistId, hash, widgetWidth } = this;
    injectVKOpenApi().then(() => {
      const options = {
        width: widgetWidth,
      };
      VK.Widgets.Playlist(
        `vk_playlist_${ownerId}_${playlistId}`,
        ownerId,
        playlistId,
        hash,
        options,
      );
    });
  }
};
</script>
