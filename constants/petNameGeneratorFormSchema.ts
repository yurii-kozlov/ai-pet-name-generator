import * as yup from 'yup';

export const petNameGeneratorFormSchema = yup.object().shape({
  petDescription: yup.string()
    .required('This field is required.')
    .min(5, 'Please enter at least 5 characters.')
});
