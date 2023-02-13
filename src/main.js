import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, AiAcmSquare,CoUserFollow, HiSolidUserAdd  } from "oh-vue-icons/icons";


addIcons(FaFlag, AiAcmSquare ,CoUserFollow,HiSolidUserAdd);


import './assets/style/main.scss'

const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router)
app.mount('#app')
