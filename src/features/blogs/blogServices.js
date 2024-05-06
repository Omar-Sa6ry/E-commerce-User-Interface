import axios from 'axios'
import { base_url } from '../../utils/base_url'

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/all-blogs`)
  return response.data
}

const getAblog = async id => {
  const response = await axios.get(`${base_url}blog/${id}`)
  return response.data
}

const blogService = {
  getBlogs,
  getAblog
}

export default blogService
