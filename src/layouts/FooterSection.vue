<template>
  <footer class="footer-section d-flex justify-center align-center flex-column">
    <ul class="footer__links d-flex justify-center align-center">
      <li class="footer__link" v-for="item in data" :key="item.title">
        <CustomButton
          typeButton="link"
          class="link d-flex justify-center align-center"
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
  </footer>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
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