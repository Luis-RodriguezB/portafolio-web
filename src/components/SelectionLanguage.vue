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
    const radioData = ref('');
    const { locale } = useI18n();
    const languages = [
      {
        en: {
          name: 'Spanish'
        },
        es: {
          name: 'Español'
        },
        cod: 'es',
      },
      {
        en: {
          name: 'English'
        },
        es: {
          name: 'Ingles'
        },
        cod: 'en',
      },
    ];

    const getLangSelected = computed(() => {
      const langSelected = languages.find(lang => lang.cod === locale.value);
      return langSelected[locale.value].name;
    })

    return {
      radioData,
      languages,
      locale,

      refElement,
      openElement,
      closeElement,

      getLangSelected
    };
  },
};
</script>
