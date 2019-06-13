import { string } from 'yup'

const email = string()
  .email('Email not valid')
  .required('Email is required')

export default email
