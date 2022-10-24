import {
  helpers,
  required,
  email,
  minLength,
  maxLength,
} from '@vuelidate/validators';

const validations = {
  fullName: {
    required: helpers.withMessage('The field is required', required),
    minLength: helpers.withMessage('Must be at least 5 characters', minLength(5)),
    maxLength: helpers.withMessage('Must be a maximum of 50 characters', maxLength(50)),
    $autoDirty: true,
  },
  email: {
    required: helpers.withMessage('The field is required', required),
    email: helpers.withMessage('Must be a valid email', email),
    minLength: helpers.withMessage('Must be at least 5 characters', minLength(5)),
    maxLength: helpers.withMessage('Must be a maximum of 80 characters', maxLength(80)),
    $autoDirty: true,
  },
  description: {
    required: helpers.withMessage('The field is required', required),
    minLength: helpers.withMessage('Must be at least 30 characters', minLength(30)),
    maxLength: helpers.withMessage('Must be a maximum of 200 characters', maxLength(200)),
    $autoDirty: true,
  },
};

export default validations;