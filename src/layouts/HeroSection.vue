<template>
  <SectionContainer
    sectionClass="inset_box-shadow container"
    containerClass="hero__content text-center"
    title="Luis Rodríguez Baltodano"
    titleType="Heading_1"
    description="Software Developer"
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
import SectionContainer from "../components/SectionContainer.vue";
import Image from "../components/Image.vue";

export default {
  components: {
    Image,
    SectionContainer,
  },
};
</script>
