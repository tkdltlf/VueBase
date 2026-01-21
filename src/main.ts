import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from 'pinia';
import $ from 'jquery'
import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'
import './assets/main.css'
import './assets/main2.scss'

const anyWindow = window as typeof window & { $?: typeof $; jQuery?: typeof $ };
anyWindow.$ = $;
anyWindow.jQuery = $;

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
