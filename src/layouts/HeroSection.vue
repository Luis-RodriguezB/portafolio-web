<template>
  <SectionContainer
    title="Luis Rodríguez Baltodano"
    description="Software Developer"
    titleType="Heading_1"
    sectionClass="inset_box-shadow container"
    containerClass="hero__content text-center"
    descriptionClass="hero__subtitle not-selected"
  >
    <p class="hero__description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis
      minima quibusdam incidunt nihil natus reiciendis et laborum illo repellat
      ut sequi explicabo, provident esse atque quam dolorem aliquid expedita?
    </p>
    <Image
      classContainer="hero__image-continer"
      src="/assets/images/coding-guy.png"
      alt="Coding guy"
      draggable="false"
    />
  </SectionContainer>
</template>

<script>
import SectionContainer from '../components/SectionContainer.vue';
import Image from '../components/Image.vue';

export default {
  components: {
    Image,
    SectionContainer,
  },
};
</script>
