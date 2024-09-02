import "./assets/main.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// import Aura from "@primevue/themes/aura";
// app.use(PrimeVue, {
//   theme: {
//     preset: Aura,
//     prefix: "test",
//   },
// });

import Aura from "@/presets/aura";
app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
});

app.mount("#app");
