<template>
  <div :class="sliderContainerClass">
    <div :class="slideContentClass">
      <swiper
        :modules="swiperOptions.modules"
        :breakpoints="swiperOptions.breakpoints"
        :slides-per-view="swiperOptions.slidesPerView"
        :space-between="swiperOptions.spaceBetween"
        :loop="swiperOptions.loop"
        :pagination="swiperOptions.pagination"
        navigation
        @swiper="swiperOptions.onSwiper"
        @slideChange="swiperOptions.onSlideChange"
        v-bind="$attrs"
      >
        <slot></slot>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper } from 'swiper/vue';

export default {
  props: {
    swiperOptions: {
      type: Object,
      required: true,
    },
    sliderContainerClass: {
      type: String,
    },
    slideContentClass: {
      type: String,
    },
  },
  components: {
    Swiper,
  },
};
</script>