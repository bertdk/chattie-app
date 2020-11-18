import * as yup from 'yup';

export const messageValidationSchema = yup.object({
  message: yup.string(),
});
