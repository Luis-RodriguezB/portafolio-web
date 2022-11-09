<template>
  <SectionContainer
    id="contact-section"
    :title="$t('contactSection.title')"
    :description="$t('contactSection.description')"
    titleType="Heading_2"
    sectionClass="container border-bottom"
    containerClass="contact__container"
    titleClass="text-center underline"
    descriptionClass="description-text text-center"
    v-scroll-reveal
  >
    <form @submit.prevent="handleSubmit" ref="formRef" autocomplete="off">
      <InputField
        v-for="inputConfig in getContact"
        :key="inputConfig.id"
        :id="inputConfig.id"
        :typeField="inputConfig.typeField"
        :placeholder="inputConfig[$i18n.locale].placeholder"
        :label="inputConfig[$i18n.locale].label"
        v-model.trim="v$[inputConfig.id].$model"
        :errors="v$[inputConfig.id].$errors"
      />
      <CustomButton
        :text="$t('contactSection.btnText')"
        type="submit"
        class="btn btn-primary"
        :disabled="v$.$invalid || !v$.$dirty || isSendingEmail"
      />
    </form>
  </SectionContainer>
</template>

<script>
import SectionContainer from '../components/SectionContainer.vue';
import InputField from '../components/InputField.vue';
import CustomButton from '../components/CustomButton.vue';

import useContactForm from '../composables/useContactForm';
import validations from '../validations';
import getContact from '../data/getContact';

export default {
  components: {
    SectionContainer,
    InputField,
    CustomButton,
  },
  setup() {
    const formConfig = {
      formData: {
        fullName: '',
        email: '',
        description: '',
      },
      formRules: {
        fullName: validations.fullName,
        email: validations.email,
        description: validations.description,
      },
    };

    const { v$, isSendingEmail, formRef, handleSubmit } = useContactForm(formConfig);

    return {
      getContact,

      v$,
      formRef,
      isSendingEmail,

      handleSubmit,
    };
  },
};
</script>
