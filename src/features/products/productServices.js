import axios from 'axios'
import { base_url } from '../../utils/base_url'
import { config } from '../../utils/ConfigAxios'

const getProducts = async data => {
  const response = await axios.get(
    `${base_url}product/all-products

    `
  )
  return response.data
}


const getProduct = async id => {
  const response = await axios.get(`${base_url}product/${id}`)
  return response.data
}

const getColor = async () => {
  const response = await axios.get(`${base_url}color/all-color`)
  return response.data
}

const getCoupon = async name => {
  const response = await axios.get(`${base_url}Coupon/${name}`)
  return response.data
}

const addToWishlist = async productId => {
  const response = await axios.put(
    `${base_url}product/wishlist/${productId}`,
    { productId },
    config
  )
  return response.data
}

const rateProduct = async data => {
  const response = await axios.put(
    `${base_url}product/rating/${data._id}`,
    { comment: data?.comment, star: data?.star, prodId: data?.prodId },
    config
  )
  return response.data
}

const productService = {
  getProducts,
  getProduct,
  getColor,
  getCoupon,
  addToWishlist,
  rateProduct
}

export default productService
