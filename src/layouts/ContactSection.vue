<template>
  <SectionContainer
    sectionClass="container"
    containerClass="contact__container"
    title="Contáctame"
    titleType="Heading_2"
    titleClass="text-center underline"
    description="Ponte en contacto conmigo y te escribiré pronto"
    descriptionClass="contact__description text-center"
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
      <button type="submit">Send</button>
    </form>
  </SectionContainer>
</template>

<script>
import { ref } from 'vue';
import SectionContainer from '../components/SectionContainer.vue';
import InputField from '../components/InputField.vue';

export default {
  components: {
    SectionContainer,
    InputField,
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