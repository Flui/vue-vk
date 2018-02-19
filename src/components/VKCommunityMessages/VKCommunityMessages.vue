<template>
  <div id="vk_community_messages"></div>
</template>

<script>
import { injectVKOpenApi } from "../../core";

export default {
  name: 'vk-messages',
  props: {
    groupId: {
      type: Number,
      isRequired: true,
    },
    onCanNotWrite: {
      type: Function
    },
    showWelcomeScreen: {
      type: Boolean,
      default: true
    },
    expandTimeout: {
      type: Number,
      validator: value => value >= 0
    },
    expanded: {
      type: Boolean,
      default: true
    },
    widgetPosition: {
      type: String,
      validator: value => !value || value === "left" || value === "right"
    },
    buttonType: {
      type: String,
      validator: value => !value || value === "no_button" || value === "blue_circle"
    },
    disableButtonTooltip: {
      type: Boolean,
      default: true
    },
    tooltipButtonText: {
      type: String
    },
    disableNewMessagesSound: {
      type: Boolean,
      default: true
    },
    disableExpandChatSound: {
      type: Boolean,
      default: true
    },
    disableTitleChange: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    const {
      groupId,
      onCanNotWrite,
      showWelcomeScreen,
      expandTimeout,
      expanded,
      widgetPosition,
      buttonType,
      disableButtonTooltip,
      tooltipButtonText,
      disableNewMessagesSound,
      disableExpandChatSound,
      disableTitleChange
    } = this;
    const options = {
      onCanNotWrite,
      welcomeScreen: showWelcomeScreen ? 1 : 0,
      expandTimeout,
      expanded: expanded ? 1 : 0,
      widgetPosition,
      buttonType,
      disableButtonTooltip: disableButtonTooltip ? 1 : 0,
      tooltipButtonText,
      disableNewMessagesSound: disableNewMessagesSound ? 1 : 0,
      disableExpandChatSound: disableExpandChatSound ? 1 : 0,
      disableTitleChange: disableTitleChange ? 1 : 0
    };

    injectVKOpenApi().then(() => {
      VK.Widgets.CommunityMessages("vk_community_messages", groupId, options);
    });
  }
};
</script>

