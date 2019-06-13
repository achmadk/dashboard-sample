import { object } from 'yup'

import name from './types/name'
import password from './types/password'

const login = name('Username')

const loginSchema = object().shape({
  login,
  password
})

export default loginSchema
