// import Layout from "./Layout.vue";
import DefaultTheme from "vitepress/theme";
import test from "./components/test.vue";

import "./style/vars.css";

import { h } from "vue";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-features-after": () => h(test),
    });
  },

  enhanceApp({ app }) {
    // register global components
    app.component("Test", test);
  },
};
