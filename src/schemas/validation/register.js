import { object } from 'yup'

import typeName from './types/name'
import email from './types/email'
import phone from './types/phone'
import password from './types/password'

const name = typeName()

const registerSchema = object().shape({
  name,
  email,
  phone,
  password
})

export default registerSchema
