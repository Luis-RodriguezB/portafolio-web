<template>
  <SectionContainer
    title="Contáctame"
    description="Ponte en contacto conmigo y te escribiré pronto"
    titleType="Heading_2"
    sectionClass="container border-bottom"
    containerClass="contact__container"
    titleClass="text-center underline"
    descriptionClass="description-text text-center"
  >
    <form @submit.prevent="handleSubmit" ref="formRef" autocomplete="off">
      <InputField
        typeField="text"
        id="name"
        placeholder="Escribe tu nombre"
        label="Nombre"
        v-model="formData.name"
        :errors="v$.name.$errors"
      />
      <InputField
        typeField="text"
        id="email"
        placeholder="Escribe tu correo"
        label="Email"
        v-model="formData.email"
        :errors="v$.email.$errors"
      />
      <InputField
        typeField="textarea"
        id="description"
        placeholder="Escribe tu mensaje"
        label="Descripción"
        v-model="formData.description"
        :errors="v$.description.$errors"
      />
      <CustomButton
        text="Enviar"
        type="submit"
        class="btn btn-primary"
        :disabled="v$.$invalid"
      />
    </form>
  </SectionContainer>
</template>

<script>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import emailjs from 'emailjs-com';

import SectionContainer from '../components/SectionContainer.vue';
import InputField from '../components/InputField.vue';
import CustomButton from '../components/CustomButton.vue';
import validations from '../helpers/validations';
import useToast from '../composables/useToast';

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
    const toast = useToast();
    const formRef = ref(null);
    const formData = ref({
      name: '',
      email: '',
      description: '',
    });

    const rules = computed(() => {
      return {
        name: validations.name,
        email: validations.email,
        description: validations.description
      }
    });
    const v$ = useVuelidate(rules, formData);
    
    const handleSubmit = async (e) => {
      const isValid = await v$.value.$validate();
      if(!isValid) return;

      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.value, USER_ID)
        .then(() => {
          console.log('Email enviado');
          toast.success('Correo enviado exitosamente');
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          e.target.reset();
        });
    }

    return {
      v$,
      formRef,
      formData,
      handleSubmit
    };
  },
};
</script>