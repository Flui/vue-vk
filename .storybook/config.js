import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import VKWidgets from '../src';

// Register custom components.
Vue.use(VKWidgets);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);