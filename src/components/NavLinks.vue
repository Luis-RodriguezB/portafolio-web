<template>
  <nav class="navLink">
    <ul class="navLink__list d-flex justify-center align-center flex-column">
      <li class="navLink__link" v-for="item in data" :key="item.title">
        <CustomButton
          typeButton="link"
          class="link"
          :style="item.color && { color: item.color }"
          :href="item.url"
          :title="item.title"
          :icon="`${
            item.icon === 'fa-address-book' ? 'fa-solid' : 'fa-brands'
          } ${item.icon}`"
          target="_blank"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import CustomButton from './CustomButton.vue';
import getPersonalInfo from '../data/getPersonalInfo';

export default {
  components: {
    CustomButton,
  },
  setup() {
    const data = getPersonalInfo;

    return {
      data,
    };
  },
};
</script>