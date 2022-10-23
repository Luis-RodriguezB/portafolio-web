<template>
  <SectionContainer
    :title="title"
    :description="description"
    titleType="Heading_2"
    sectionClass="container border-bottom"
    containerClass="contact__container"
    titleClass="text-center underline"
    descriptionClass="description-text text-center"
  >
    <form @submit.prevent="handleSubmit" ref="formRef" autocomplete="off">
      <InputField
        v-for="{ id, label, placeholder, typeField } in formConfig"
        :key="id"
        :id="id"
        :typeField="typeField"
        :placeholder="placeholder"
        :label="label"
        v-model.trim="v$[id].$model"
        :errors="v$[id].$errors"
      />
      <CustomButton
        text="Send"
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
import validations from '../helpers/validations';
import getContact from '../data/getContact';

export default {
  components: {
    SectionContainer,
    InputField,
    CustomButton,
  },
  setup() {
    const formData = {
      fullName: '',
      email: '',
      description: '',
    };
    const rules = {
      fullName: validations.fullName,
      email: validations.email,
      description: validations.description,
    };
    const { title, description, formConfig } = getContact;
    const { v$, isSendingEmail, formRef, handleSubmit } = useContactForm(formData, rules);

    return {
      title,
      description,
      formConfig,

      v$,
      formRef,
      isSendingEmail,

      handleSubmit,
    };
  },
};
</script>
