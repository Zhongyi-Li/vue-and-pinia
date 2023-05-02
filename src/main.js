import { createApp } from "vue";
// import { createPinia } from "pinia";
import { pinia } from "./store";
import "./style.css";
import App from "./App.vue";

// const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.mount("#app");
