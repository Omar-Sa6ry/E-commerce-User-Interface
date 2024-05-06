import axios from 'axios'
import { base_url } from '../../utils/base_url'
import { config } from '../../utils/ConfigAxios'

const register = async user => {
  const response = await axios.post(`${base_url}user/register`, user)
  if (response.data) {
    localStorage.setItem('customer', JSON.stringify(response.data))
  }
  return response.data
}

const login = async user => {
  const response = await axios.post(`${base_url}user/login`, user)
  if (response.data) {
    localStorage.setItem('customer', JSON.stringify(response.data))
  }
  return response.data
}

const forgetPasswordToken = async email => {
  const response = await axios.post(
    `${base_url}user/Forgot-Password-Token`,
    email
  )
  if (response.data) {
    return response.data
  }
}

const editUser = async user => {
  const response = await axios.put(`${base_url}user/edit-user`, user, config)
  if (response.data) {
    return response.data
  }
}

const getUserWishlistS = async id => {
    const response = await axios.get(`${base_url}user/wishlist/${id}`, config)
    if (response.data) {
      return response.data
    }
}

const addTocart = async data => {
  const response = await axios.post(`${base_url}user/cart`, data, config)
  if (response.data) {
    return response.data
  }
}

const getUserCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config)
  if (response.data) {
    return response.data
  }
}

const deleteproductcart = async id => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${id}`,
    config
  )
  if (response.data) {
    return response.data
  }
}

const updateproductcart = async cartDetail => {
  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartDetail?.cartItemId}/${cartDetail?.quantity}`,
    config
  )
  if (response.data) {
    return response.data
  }
}

const postOrder = async data => {
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    data,
    config
  )
  if (response.data) {
    return response.data
  }
}

const getAnOrder = async () => {
  const response = await axios.get(`${base_url}user/order/get-my-order`, config)
  if (response.data) {
    return response.data
  }
}

const deleteCart = async () => {
  const response = await axios.delete(`${base_url}user/cart/empty-cart`, config)
  if (response.data) {
    return response.data
  }
}

const authService = {
  register,
  login,
  forgetPasswordToken,
  editUser,
  getUserWishlistS,
  addTocart,
  getUserCart,
  deleteproductcart,
  updateproductcart,
  postOrder,
  getAnOrder,
  deleteCart
}

export default authService
