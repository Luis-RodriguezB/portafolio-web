<template>
  <SectionContainer
    :title="title"
    :description="subTitle"
    titleType="Heading_1"
    titleClass="hero__title"
    sectionClass="inset_box-shadow container"
    containerClass="hero__content text-center"
    descriptionClass="hero__subtitle not-selected"
  >
    <p class="hero__description">{{ description }}</p>
    <Image
      classContainer="hero__image-continer"
      :src="image.src"
      :alt="image.alt"
      draggable="false"
    />
  </SectionContainer>
</template>

<script>
import SectionContainer from '../components/SectionContainer.vue';
import Image from '../components/Image.vue';
import getHeroInfo from '../data/getHeroInfo';

export default {
  components: {
    Image,
    SectionContainer,
  },
  setup() {
    const { title, subTitle, description, image } = getHeroInfo;

    return {
      title,
      subTitle,
      description,
      image
    }
  }
};
</script>