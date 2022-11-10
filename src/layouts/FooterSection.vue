<template>
  <footer
    id="footer-section"
    class="footer-section d-flex flex-column justify-between align-center"
    v-scroll-reveal
  >
    <div class="footer__top d-flex flex-column align-center">
      <ul class="footer__social-links d-flex">
        <li
          class="footer__social-link"
          v-for="item in getPersonalInfo"
          :key="item.title"
        >
          <CustomButton
            typeButton="link"
            class="link d-flex justify-center align-center"
            :href="item.url"
            :title="item.title"
            :icon="`${item.icon}`"
            :target="item.title === 'Email' ? '_self' : '_blank'"
          />
        </li>
      </ul>
    </div>
    <div class="footer__lower d-flex justify-center align-center">
      <p class="footer__lower-text">
        &copy; {{ new Date().getFullYear() }}.
        {{ $t('footerSection.description') }} Luis Rodríguez Baltodano
      </p>
    </div>
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
    return {
      getPersonalInfo,
    };
  },
};
</script>