<template>
  <div id="vk_groups"></div>
</template>

<script>
import { injectVKOpenApi } from '../../core';
import { colorStringToColorHash } from '../../core/utils';

export default {
  name: 'vk-community',
  props: {
    width: {
      type: [String, Number],
      validator: value =>
        !value || (typeof value === 'number' && value >= 300) || value === "auto"
    },
    height: {
      type: Number,
      validator: value => !value || (value >= 200 && value <= 600)
    },
    mode: {
      type: Number,
      validator: value => !value || [0, 1, 2, 3, 4].includes(value)
    },
    wide: {
      type: Boolean
    },
    bcgColor: {
      type: String
    },
    textColor: {
      type: String
    },
    buttonColor: {
      type: String
    },
    groupId: {
      type: Number,
      isRequired: true,
    }
  },
  mounted() {
    const {
      groupId,
      width,
      height,
      mode,
      wide,
      bcgColor,
      textColor,
      buttonColor
    } = this;

    const options = {
      width,
      height,
      mode,
      wide: wide ? 1 : 0,
      color1: colorStringToColorHash(bcgColor),
      color2: colorStringToColorHash(textColor),
      color3: colorStringToColorHash(buttonColor),
    };
    console.log('options', wide);

    injectVKOpenApi().then(() => {
      VK.Widgets.Group("vk_groups", options, groupId);
    });
  }
};
</script>

