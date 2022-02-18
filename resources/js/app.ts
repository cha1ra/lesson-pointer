import { createApp, h } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

require('./bootstrap');

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const vuetify = createVuetify({ components, directives });

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => require(`./Pages/${name}.vue`),
  // @ts-ignore
  setup({
    el, app, props, plugin,
  }) {
    return createApp({ render: () => h(app, props) })
      .use(vuetify)
      .use(plugin)
      // @ts-ignore
      .mixin({ methods: { route } })
      .mount(el);
  },
});

InertiaProgress.init({ color: '#4B5563' });
