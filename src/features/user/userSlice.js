import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import authService from './userServices'
import { toast } from 'react-toastify'

const getUserfromLocalStorage = localStorage.getItem('customer')
  ? JSON.parse(localStorage.getItem('customer'))
  : null

const initialState = {
  user: getUserfromLocalStorage,
  wishlist: [],
  orders: [],
  cart: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (email, thunkAPI) => {
    try {
      return await authService.forgetPasswordToken(email)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async (token, thunkAPI) => {
    try {
      return await authService.resetPasswordToken(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateUser = createAsyncThunk(
  'auth/Update',
  async (user, thunkAPI) => {
    try {
      return await authService.editUser(user)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getUserWishlist = createAsyncThunk(
  'auth/wishlist',
  async thunkAPI => {
    try {
      return await authService.getUserWishlistS()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addToCart = createAsyncThunk(
  'auth/Add-To-Cart',
  async (data, thunkAPI) => {
    try {
      return await authService.addTocart(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const showCart = createAsyncThunk(
  'auth/Show-Cart',
  async (id, thunkAPI) => {
    try {
      return await authService.getUserCart(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const removeProductCart = createAsyncThunk(
  'auth/Delete-Product-Cart',
  async (id, thunkAPI) => {
    try {
      return await authService.deleteproductcart(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateProductDetailsQ = createAsyncThunk(
  'auth/Update-Product-Cart',
  async (cartDetail, thunkAPI) => {
    try {
      return await authService.updateproductcart(cartDetail)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const createOrder = createAsyncThunk(
  'order/Create-Order',
  async (detail, thunkAPI) => {
    try {
      return await authService.postOrder(detail)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getMyOrder = createAsyncThunk(
  'order/Get-Order',
  async thunkAPI => {
    try {
      return await authService.getAnOrder()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const emptyCart = createAsyncThunk('cart/empty-cart', async thunkAPI => {
  try {
    return await authService.deleteCart()
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const resetState = createAction('Reset_all')

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: buildeer => {
    buildeer
      .addCase(register.pending, state => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        localStorage.setItem('token', action.payload.token)
        if (state.isSuccess) {
          setTimeout(() => {
            window.location.reload()
            toast.success('User is created Successfullly!')
          }, 1500)
        }
        state.createdUser = action.payload
        state.message = 'success'
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isSuccess = true
        localStorage.setItem('token', action.payload.token)
        state.isError = false
        state.isLoading = false
        state.user = action.payload
        state.message = 'success'
        if (state.isSuccess === true) {
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          toast.info('you are logged in successfully')
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(forgotPassword.pending, state => {
        state.isLoading = true
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
        state.ForgotPassword = action.payload
        if (state.isSuccess) {
          toast.success('Email Sent Successfully !')
        }
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.updatedUser = action.payload
        if (state.isSuccess === true) {
          let token = localStorage.getItem('token')

          let newUserData = {
            _id: state?.updatedUser?._id,
            token: token,
            firstname: action?.payload?.firstname,
            lastname: action?.payload?.lastname,
            email: action?.payload?.email,
            mobile: action?.payload?.mobile
          }
          localStorage.setItem('customer', JSON.stringify(newUserData))

          toast.success('User is Updated Successfullly!')
        }
        state.status = 200
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
        state.status = 400
      })
      .addCase(getUserWishlist.pending, state => {
        state.isLoading = true
      })
      .addCase(getUserWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.wishlist = action.payload
      })
      .addCase(getUserWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(showCart.pending, state => {
        state.isLoading = true
      })
      .addCase(showCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.ShowCart = action.payload
      })
      .addCase(showCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(addToCart.pending, state => {
        state.isLoading = true
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isSuccess = true
        if (state.isSuccess) {
          toast.success('Product Added To Cart !')
        }
        state.ProductCart = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(removeProductCart.pending, state => {
        state.isLoading = true
      })
      .addCase(removeProductCart.fulfilled, (state, action) => {
        state.isSuccess = true
        if (state.isSuccess) {
          toast.success('Product Deleted From Cart !')
        }
        state.deletedCartProduct = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(removeProductCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(updateProductDetailsQ.pending, state => {
        state.isLoading = true
      })
      .addCase(updateProductDetailsQ.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
        state.UpdatedCartProduct = action.payload
        if (state.isSuccess) {
          toast.success('Updated Cart Successfully !')
        }
      })
      .addCase(updateProductDetailsQ.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(createOrder.pending, state => {
        state.isLoading = true
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
        state.CreateOrderProduct = action.payload
        if (state.isSuccess === true) {
          toast.success('Order Created Successfully !')
        }
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(getMyOrder.pending, state => {
        state.isLoading = true
      })
      .addCase(getMyOrder.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
        state.getMyOrder = action.payload
      })
      .addCase(getMyOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(emptyCart.pending, state => {
        state.isLoading = true
      })
      .addCase(emptyCart.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.isError = false
        state.EmptyCart = action.payload
      })
      .addCase(emptyCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(resetState, () => initialState)
  }
})

export default authSlice.reducer
