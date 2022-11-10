import { required, email, minLength, maxLength } from './i18nValidations';

const validations = {
  fullName: {
    required,
    minLength: minLength(5),
    maxLength: maxLength(50),
    $autoDirty: true,
  },
  email: {
    required,
    email,
    minLength: minLength(5),
    maxLength: maxLength(80),
    $autoDirty: true,
  },
  description: {
    required: required,
    minLength: minLength(30),
    maxLength: maxLength(200),
    $autoDirty: true,
  },
};

export default validations;