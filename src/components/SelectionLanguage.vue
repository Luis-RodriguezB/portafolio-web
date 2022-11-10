<template>
  <div class="select-menu">
    <div @click="openElement" v-click-outside="closeElement" class="select">
      <span class="select__text">
        {{ getLangSelected }}
      </span>
    </div>
    <div
      @click.capture="closeElement"
      ref="refElement"
      class="options-list hidden"
      @change="handleChange"
    >
      <InputField
        v-for="lang in languages"
        :key="lang.cod"
        :id="lang.cod"
        :value="lang.cod"
        :label="lang[locale].name"
        v-model="locale"
        type="radio"
        name="lang"
        inputContainerClass="option"
        inputClass="radio"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import useToggleElement from '../composables/useToggleElement';
import InputField from './InputField.vue';

export default {
  components: {
    InputField,
  },
  setup() {
    const { refElement, openElement, closeElement } = useToggleElement();
    const { locale } = useI18n();
    const languages = [
      {
        en: {
          name: 'Spanish',
        },
        es: {
          name: 'Español',
        },
        cod: 'es',
      },
      {
        en: {
          name: 'English',
        },
        es: {
          name: 'Ingles',
        },
        cod: 'en',
      },
    ];

    return {
      languages,
      locale,
      refElement,

      openElement,
      closeElement,
      handleChange: () => localStorage.setItem('lang', locale.value),
      getLangSelected: computed(
        () => languages.find((lang) => lang.cod === locale.value)[locale.value].name
      ),
    };
  },
};
</script>
