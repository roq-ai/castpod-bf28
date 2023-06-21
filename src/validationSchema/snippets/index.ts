import * as yup from 'yup';

export const snippetValidationSchema = yup.object().shape({
  start_time: yup.number().integer().required(),
  end_time: yup.number().integer().required(),
  episode_id: yup.string().nullable().required(),
  individual_id: yup.string().nullable().required(),
});
