<template>
  <SectionContainer
    title="Mis proyectos"
    description="Proyectos personales en los cuales he podido desarrollar mis habilidades"
    titleType="Heading_2"
    sectionClass="container project-section"
    titleClass="text-center underline"
    descriptionClass="text-center description-text"
    containerClass="project-container d-flex flex-column"
  >
    <div class="slider-container">
      <div class="slide-content">
        <swiper
          :modules="swiperOptions.modules"
          :breakpoints="swiperOptions.breakpoints"
          :slides-per-view="swiperOptions.slidesPerView"
          :space-between="swiperOptions.spaceBetween"
          :loop="swiperOptions.loop"
          :pagination="swiperOptions.pagination"
          navigation
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="n in 9" :key="n">
            <Card
              srcImage="/assets/images/coding-guy.png"
              altImage="Coding guy"
              title="Proyect test"
              tools="Javascript, HTML y CSS"
              href="#"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionContainer from "../components/SectionContainer.vue";
import Card from "../components/Card.vue";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SectionContainer,
    Card,
  },
  setup() {
    const swiperOptions = {
      slidesPerView: 1,
      spaceBetween: 25,
      pagination: { clickable: true },
      loop: true,
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectFade],
      breakpoints: {
        240: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 35,
        },

        1215: {
          slidesPerView: 3,
          spaceBetween: 45,
        },
      },
    };

    return {
      swiperOptions,

      onSwiper: () => console.log("onSwiper called"),
      onSlideChange: () => console.log("Slide change"),
    };
  },
};
</script>