import { object } from 'yup'

import name from './types/name'
import employee_number from './types/employee-number'
import citizen_number from './types/citizen-number'
import instance_name from './types/instance-name'
import phone from './types/phone'
import email from './types/email'

const editProfileSchema = object().shape({
  first_name: name('First Name'),
  last_name: name('Last Name'),
  employee_number,
  citizen_number,
  instance_name,
  phone,
  email_address: email,
  email_address_alternative: email
})

export default editProfileSchema
