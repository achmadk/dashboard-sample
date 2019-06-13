import { string } from 'yup'

export default function name (label = 'Name') {
  return string().required(`${label} is required`)
}
