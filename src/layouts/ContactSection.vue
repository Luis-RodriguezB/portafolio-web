<template>
  <SectionContainer
    title="Contáctame"
    description="Ponte en contacto conmigo y te escribiré pronto"
    titleType="Heading_2"
    sectionClass="container"
    containerClass="contact__container"
    titleClass="text-center underline"
    descriptionClass="description-text text-center"
  >
    <form autocomplete="off">
      <InputField
        typeField="text"
        id="name"
        placeholder="Escribe tu nombre"
        label="Nombre"
        v-model="formData.name"
      />
      <InputField
        typeField="text"
        id="email"
        placeholder="Escribe tu correo"
        label="Email"
        v-model="formData.email"
      />
      <InputField
        typeField="textarea"
        id="description"
        placeholder="Escribe tu mensaje"
        label="Descripción"
        v-model="formData.description"
      />
      <CustomButton type="submit" text="Enviar" class="btn btn-primary" />
    </form>
  </SectionContainer>
</template>

<script>
import { ref } from 'vue';
import SectionContainer from '../components/SectionContainer.vue';
import InputField from '../components/InputField.vue';
import CustomButton from '../components/CustomButton.vue';

export default {
  components: {
    SectionContainer,
    InputField,
    CustomButton,
  },
  setup() {
    const formData = ref({
      name: '',
      email: '',
      description: '',
    });

    return {
      formData,
    };
  },
};
</script>