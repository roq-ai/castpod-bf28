import * as yup from 'yup';

export const podcastValidationSchema = yup.object().shape({
  title: yup.string().required(),
  creator: yup.string().required(),
  category: yup.string().required(),
});
