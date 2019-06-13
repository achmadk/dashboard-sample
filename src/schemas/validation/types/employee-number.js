import { number } from 'yup'

const employeeNumber = number()
  .required('Employee number is required')
  .test(
    'is-employee-number',
    'Employee number must be 16 digit',
    value => value.toString().length === 16
  )

export default employeeNumber
