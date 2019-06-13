import { addMethod, number } from 'yup'
import { parseNumber, isValidNumber } from 'libphonenumber-js'

// penggunaan ES6 feature arrow function tidak berlaku ketika menambahkan method baru
addMethod(number, 'phone', function (message) {
  return this.test({
    name: 'phone',
    exclusive: true,
    message,
    test (value) {
      try {
        const phone = parseNumber(value.toString(), 'ID')
        return isValidNumber(phone)
      } catch (e) {
        return false
      }
    }
  })
})

const phone = number()
  .required('Phone Number is required')
  .phone('Must valid phone number')

export default phone
