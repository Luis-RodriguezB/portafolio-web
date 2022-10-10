<template>
  <SectionContainer
    title="Mis proyectos"
    description="Proyectos personales en los cuales he podido desarrollar mis habilidades"
    titleType="Heading_2"
    sectionClass="container project-section border-bottom"
    titleClass="text-center underline"
    descriptionClass="text-center description-text"
    containerClass="project-container d-flex flex-column"
  >
    <Slider
      sliderContainerClass="slider-container"
      slideContentClass="slide-content"
      :swiperOptions="swiperOptions"
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
    </Slider>
  </SectionContainer>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { SwiperSlide } from 'swiper/vue';
import SectionContainer from '../components/SectionContainer.vue';
import Slider from '../components/Slider.vue';
import Card from '../components/Card.vue';

export default {
  components: {
    SwiperSlide,
    SectionContainer,
    Slider,
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
      onSwiper: () => console.log('onSwiper called'),
      onSlideChange: () => console.log('Slide change'),
    };

    return {
      swiperOptions,
    };
  },
};
</script>
