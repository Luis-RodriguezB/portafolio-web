<template>
  <div :class="classContainer">
    <img :src="src" :alt="alt" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  props: {
    classContainer: {
      type: String,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>