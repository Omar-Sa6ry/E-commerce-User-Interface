import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import productService from './productServices'
import { toast } from 'react-toastify'

export const getproducts = createAsyncThunk(
  'product/get-products',
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getAproduct = createAsyncThunk(
  'product/get-product',
  async (id, thunkAPI) => {
    try {
      return await productService.getProduct(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getAllColors = createAsyncThunk(
  'product/get-colors',
  async thunkAPI => {
    try {
      return await productService.getColor()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addToWishlist = createAsyncThunk(
  'product/add-to-wishlist',
  async (productId, thunkAPI) => {
    try {
      return await productService.addToWishlist(productId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getACoupon = createAsyncThunk(
  'coupon/get-coupon',
  async (name, thunkAPI) => {
    try {
      return await productService.getCoupon(name)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addRating = createAsyncThunk(
  'product/addRating',
  async (data, thunkAPI) => {
    try {
      return await productService.rateProduct(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetState = createAction('Reset_all')

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getproducts.pending, state => {
        state.isLoading = true
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.product = action.payload
      })
      .addCase(getproducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(getAproduct.pending, state => {
        state.isLoading = true
      })
      .addCase(getAproduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.singleProduct = action.payload
      })
      .addCase(getAproduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(getAllColors.pending, state => {
        state.isLoading = true
      })
      .addCase(getAllColors.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.colors = action.payload
      })
      .addCase(getAllColors.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(addToWishlist.pending, state => {
        state.isLoading = true
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.addToWishlist = action.payload
        state.message = 'Product Is Already Added To Wishlist !'
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.ewishlist = action.payload
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(getACoupon.pending, state => {
        state.isLoading = true
      })
      .addCase(getACoupon.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.singleCoupon = action.payload
      })
      .addCase(getACoupon.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(addRating.pending, state => {
        state.isLoading = true
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.rating = action.payload
        state.message = 'Rating Added Successfully !'
        if (state.isSuccess) {
          toast.success('Rewiew Added Successfully !')
        }
      })
      .addCase(addRating.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        console.log(action?.payload?.response?.data?.message)
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(resetState, () => initialState)
  }
})
export default productSlice.reducer
