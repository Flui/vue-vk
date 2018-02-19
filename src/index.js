import * as components from './components';

const VKWidgets = {
  install: (Vue) => {
    const plugins = Object.keys(components);
    plugins.forEach((plugin) => {
      Vue.use(components[plugin]);
    });
  },
};

export default VKWidgets;

