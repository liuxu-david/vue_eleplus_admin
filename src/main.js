import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store/index";
import refreshData from "@/utils/refreshStore";
import "@/styles/index.less";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(pinia).mount("#app");
refreshData();
// console.log(process.env.VUE_APP_BASE_API);
