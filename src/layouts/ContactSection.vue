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
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { useToast } from 'vue-toastification';
import emailjs from 'emailjs-com';

import SectionContainer from '../components/SectionContainer.vue';
import InputField from '../components/InputField.vue';
import CustomButton from '../components/CustomButton.vue';
import validations from '../helpers/validations';
import getContact from '../data/getContact';

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_USER_ID;

export default {
  components: {
    SectionContainer,
    InputField,
    CustomButton,
  },
  setup() {
    const { title, description, formConfig } = getContact;
    const isSendingEmail = ref(false);
    const toast = useToast();
    const formRef = ref(null);
    const formData = ref({
      fullName: '',
      email: '',
      description: '',
    });

    const rules = computed(() => {
      return {
        fullName: validations.fullName,
        email: validations.email,
        description: validations.description,
      };
    });
    const v$ = useVuelidate(rules, formData);

    const handleSubmit = (e) => {
      v$.value.$touch();

      if (v$.value.$invalid) return;

      isSendingEmail.value = true;
      emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.value, USER_ID)
      .then(() => {
          toast.success('Mensaje enviado.');
          console.log('Email enviado');
        })
        .catch((error) => {
          toast.error('Ups!... Algo ha ocurrido.');
          console.log(error);
        })
        .finally(() => {
          e.target.reset();
          isSendingEmail.value = false;
          v$.value.$reset();
        });
    };

    return {
      title,
      description,
      formConfig,
      v$,
      isSendingEmail,
      formRef,
      formData,
      handleSubmit,
    };
  },
};
</script>