import { string } from 'yup'

const password = string()
  // .min(8, 'Password must be 8 characters or longer')
  .max(255, 'Password must be 255 characters or shorter')
  // .matches(/^[a-z0-9]+$/i, 'Password must include numeric and characters')
  .required('Password is required')

export default password
