<template>
  <SectionContainer
    :title="title"
    :description="description"
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
      <swiper-slide v-for="n in 6" :key="n">
        <Card
          :srcImage="projects[0].image.src"
          :altImage="projects[0].image.alt"
          :title="projects[0].title"
          :tools="getListFormat(projects[0].tools)"
          :href="projects[0].url"
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
import getProjects from '../data/getProjects';
import getListFormat from '../helpers/getListFormat';

export default {
  components: {
    SwiperSlide,
    SectionContainer,
    Slider,
    Card,
  },
  setup() {
    const { title, description, projects } = getProjects;
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
      title,
      description,
      projects,
      swiperOptions,
      getListFormat
    };
  },
};
</script>