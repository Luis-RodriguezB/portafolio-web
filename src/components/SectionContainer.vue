<template>
  <section :class="['hidden', sectionClass]">
    <div :class="containerClass">
      <h1 v-if="titleType === 'Heading_1'" :class="titleClass">{{ title }}</h1>
      <h2 v-else :class="titleClass">{{ title }}</h2>
      <span v-if="description" :class="descriptionClass">
        {{ description }}
      </span>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionClass: {
      type: String,
    },
    containerClass: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    titleType: {
      type: String, // Heading_1 => h1 | Heading_2 => h2
      default: 'Heading_1',
    },
    titleClass: {
      type: String,
    },
    description: {
      type: String,
    },
    descriptionClass: {
      type: String,
    },
  },
};
</script>