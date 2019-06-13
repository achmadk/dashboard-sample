import { string } from 'yup'

const instanceName = string().required('Instance Name is required')

export default instanceName
