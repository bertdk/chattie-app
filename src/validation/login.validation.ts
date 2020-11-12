import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  name: yup.string().required('Name is required'),
  room: yup.string().required('Room is required'),
});
