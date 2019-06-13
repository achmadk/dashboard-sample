import { object, string, ref } from 'yup'

import password from './types/password'

const updatePasswordSchema = object().shape({
  password,
  password_confirmation: string()
    .oneOf([ref('password'), null], 'Password does not match')
    .required('Password confirmation is required')
})

export default updatePasswordSchema
