import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { errorStore } from "./store/errorTest";
import { MyModuleStore } from "./store/test";
import Counter2 from "./store/testRaw";

const app = createApp(App);
app.use(Antd);

app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info);
  errorStore.commitCount(new Date());
};
app.mount("#app");
