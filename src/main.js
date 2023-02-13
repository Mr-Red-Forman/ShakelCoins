import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index.js'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidUserAdd  } from "oh-vue-icons/icons";

addIcons(HiSolidUserAdd);

import './assets/style/main.scss'

const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(router)
app.use(store)

app.mount('#app')
