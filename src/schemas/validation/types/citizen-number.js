import { number } from 'yup'

const citizenNumber = number()
  .required('Citizen number is required')
  .test(
    'is-citizen-number',
    'Citizen number must be 18 digit',
    value => value.toString().length === 18
  )

export default citizenNumber
