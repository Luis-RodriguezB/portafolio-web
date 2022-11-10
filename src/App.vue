<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from './layouts/Header.vue';

export default {
  components: {
    Header,
  },
  setup() {
    const { locale } = useI18n();

    onMounted(() => {
      if (localStorage.getItem('lang')) {
        locale.value = localStorage.getItem('lang');
      } else {
        localStorage.setItem('lang', locale.value);
      }
    });

    return {};
  },
};
</script>