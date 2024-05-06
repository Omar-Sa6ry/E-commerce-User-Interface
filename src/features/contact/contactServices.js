import axios from 'axios'
import { base_url } from '../../utils/base_url'
import { config } from '../../utils/ConfigAxios'

const postQuery = async data => {
  const response = await axios.post(
    `${base_url}enquiry/create-enquiry`,
    data,
    config
  )
  return response.data
}

const QueryService = {
  postQuery
}

export default QueryService
