import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { useToast } from 'vue-toastification';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_USER_ID;

const useContactForm = (data = {}, validatons = {}) => {
  const toast = useToast();
  const formRef = ref(null);
  const formData = ref(data);
  const isSendingEmail = ref(false);

  const rules = computed(() => validatons);
  const v$ = useVuelidate(rules, formData);

  const handleSubmit = (e) => {
    v$.value.$touch();

    if (v$.value.$invalid) return;

    isSendingEmail.value = true;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.value, USER_ID)
      .then(() => {
        toast.success('Your message has been sent');
        console.log('Email enviado');
      })
      .catch((error) => {
        toast.error('Ups!... Something went wrong');
        console.log(error);
      })
      .finally(() => {
        e.target.reset();
        isSendingEmail.value = false;
        v$.value.$reset();
      });
  };

  return {
    formRef,
    v$,
    isSendingEmail,
    handleSubmit,
  };
};

export default useContactForm;
