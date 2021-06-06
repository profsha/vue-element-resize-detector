import { createApp } from "vue";
import App from "./App.vue";
import resize from "./directive/elementResizeDetector";

let app = createApp(App);
app.directive("resize", resize);

app.mount("#app");
