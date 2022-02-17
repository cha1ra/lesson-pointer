import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

require('./bootstrap');

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => require(`./Pages/${name}.vue`),
  // @ts-ignore
  setup({
    el, app, props, plugin,
  }) {
    return createApp({ render: () => h(app, props) })
      .use(plugin)
      // @ts-ignore
      .mixin({ methods: { route } })
      .mount(el);
  },
});

InertiaProgress.init({ color: '#4B5563' });