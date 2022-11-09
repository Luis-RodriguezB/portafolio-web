import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { useToast } from 'vue-toastification';
import emailjs from 'emailjs-com';
import { useI18n } from 'vue-i18n';

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_USER_ID;

const useContactForm = (formConfig = {}) => {
  const toast = useToast();
  const formRef = ref(null);
  const formData = ref(formConfig.formData);
  const isSendingEmail = ref(false);
  const { t } = useI18n();

  const rules = computed(() => formConfig.formRules);
  const v$ = useVuelidate(rules, formData);

  const handleSubmit = (e) => {
    v$.value.$touch();

    if (v$.value.$invalid) return;

    isSendingEmail.value = true;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.value, USER_ID)
      .then(() => {
        toast.success(t('contactSection.toastMessage.success'));
        console.log('Email enviado');
      })
      .catch((error) => {
        toast.error(t('contactSection.toastMessage.error'));
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
