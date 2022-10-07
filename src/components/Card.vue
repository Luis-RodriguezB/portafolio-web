<template>
  <div class="card">
    <div class="card__image-content d-flex flex-column align-center">
      <span class="overlay"></span>
      <Image :src="srcImage" :alt="altImage" classContainer="card__image" class="card__img" />
    </div>

    <div class="card__content d-flex flex-column">
      <h3 class="card__title">{{title}}</h3>
      <p class="card__description"><strong>Tools:</strong> {{tools}}</p>
      <CustomButton class="btn-card" text="Ver más" typeButton="link" :href="href" />
    </div>
  </div>
</template>

<script>
import Image from "./Image.vue";
import CustomButton from "./CustomButton.vue";

export default {
  components: {
    Image,
    CustomButton,
  },
  props: {
    srcImage: {
      type: String,
      required: true,
    },
    altImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tools: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
};
</script>