import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { MotionPlugin } from '@vueuse/motion';
import Toast from 'vue-toastification';

import router from './router';
import icons from './icons';
import App from './App.vue';

import 'vue-toastification/dist/index.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './sass/style.scss';

const options = {
    position: 'bottom-right',
    maxToasts: 1,
    transition: "Vue-Toastification__bounce",
    transitionDuration: 750,
    toastClassName: ['toast__custom'],
    newestOnTop: true,
    draggable: false,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    timeout: 3000,
    container: document.body,
    hideProgressBar: false,
    hideCloseButton: false,
    icon: true
}

library.add(...icons);

const app = createApp(App)
    .use(router)
    .use(Toast, options)
    .use(MotionPlugin);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');