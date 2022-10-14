<template>
  <div class="skills">
    <div class="skills__header d-flex align-center">
      <font-awesome-icon v-if="icon" :icon="icon" />
      <h3 class="skills__header-title">{{ title }}</h3>
    </div>
    <p v-if="description" class="skills__desciption">
      {{ description }}
    </p>
    <ul :class="['skills_list', knowledge.length > 4 && 'two-column']">
      <li v-for="item in knowledge" :key="item">
        <Image
          src="/images/check.svg"
          alt="check icon"
          classContainer="skills__icon"
        />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import Image from '../components/Image.vue';
export default {
  components: {
    Image,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    description: {
      type: String,
    },
    knowledge: {
      type: Array,
      default: () => [],
    },
  },
};
</script>