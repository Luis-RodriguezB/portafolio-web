import {
  helpers,
  required,
  email,
  minLength,
  maxLength,
} from '@vuelidate/validators';

const validations = {
  name: {
    required: helpers.withMessage('El nombre es requerido', required),
    minLength: helpers.withMessage(
      'Deben ser mínimo 5 caracteres',
      minLength(5)
    ),
    maxLength: helpers.withMessage(
      'Deben ser máximo 50 caracteres',
      maxLength(50)
    ),
    $autoDirty: true,
  },
  email: {
    required: helpers.withMessage('El correo es requerido', required),
    email: helpers.withMessage('Debe ser un correo válido', email),
    minLength: helpers.withMessage(
      'Deben ser mínimo 5 caracteres',
      minLength(5)
    ),
    maxLength: helpers.withMessage(
      'Deben ser máximo 80 caracteres',
      maxLength(80)
    ),
    $autoDirty: true,
  },
  description: {
    required: helpers.withMessage('La descripción es requerida', required),
    minLength: helpers.withMessage(
      'Deben ser mínimo 30 caracteres',
      minLength(30)
    ),
    maxLength: helpers.withMessage(
      'Deben ser máximo 200 caracteres',
      maxLength(200)
    ),
    $autoDirty: true,
  },
};

export default validations;