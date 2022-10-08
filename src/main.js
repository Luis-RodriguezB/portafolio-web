import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import router from './router';
import icons from './icons';
import App from './App.vue';

import './sass/style.scss';
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

library.add(...icons);

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');