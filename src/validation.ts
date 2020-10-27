import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('email', {
  ...email,
  message: 'This is not a valid email'
});
extend('password', {
  params: ['target'],
  validate(value, params: Record<string, any>) {
    return value === params.target;
  },
  message: 'Password confirmation does not match'
});
extend('min', {
  ...min,
  message(value, args) {
    return `Must have at least ${args.length} characters`;
  }
});
export { ValidationObserver, ValidationProvider };
