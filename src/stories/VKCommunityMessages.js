import { text, number, boolean, select } from '@storybook/addon-knobs/vue';
import VKCommunityMessages from '../components/VKCommunityMessages';
import markdown from '../components/VKCommunityMessages/VKCommunityMessages.md';

export const note = markdown;

export const story = () => {
  const groupId = number('groupId', 127607773);
  const showWelcomeScreen = boolean('Show welcome screen', true);
  const expandTimeout = number('expand Timeout', 1, { min: 0 });
  const expanded = boolean('expanded', true);
  const widgetPosition = select('widget position', {
    left: 'left',
    right: 'right',
  }, 'left');
  const buttonType = select('button type', {
    no_button: 'no button',
    blue_circle: 'blue circle',
  }, 'no_button');
  const disableButtonTooltip = boolean('disable button tooltip', true);
  const tooltipButtonText = text('tooltip button text', '');
  const disableNewMessagesSound = boolean('disable new messages sound', true);
  const disableExpandChatSound = boolean('disable expanded chat sound', true);
  const disableTitleChange = boolean('disable title change', true);

  return {
    components: { VKCommunityMessages },
    template: `<vk-messages
      :groupId="${groupId}"
      :showWelcomeScreen="${showWelcomeScreen}"
      :expandTimeout="${expandTimeout}"
      :expanded="${expanded}"
      :widgetPosition="${widgetPosition}"
      :buttonType="${buttonType}"
      :disableButtonTooltip="${disableButtonTooltip}"
      tooltipButtonText="${tooltipButtonText}"
      :disableNewMessagesSound="${disableNewMessagesSound}"
      :disableExpandChatSound="${disableExpandChatSound}"
      :disableTitleChange="${disableTitleChange}"
    ></vk-messages>`,
  };
};
