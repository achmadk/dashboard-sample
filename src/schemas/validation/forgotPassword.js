import { object } from 'yup'

import email from './types/email'

const forgotPasswordSchema = object().shape({
  email
})

export default forgotPasswordSchema
