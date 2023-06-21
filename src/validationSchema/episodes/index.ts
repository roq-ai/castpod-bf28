import * as yup from 'yup';

export const episodeValidationSchema = yup.object().shape({
  title: yup.string().required(),
  duration: yup.number().integer().required(),
  podcast_id: yup.string().nullable().required(),
});
