import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import blogService from './blogServices'
import { toast } from 'react-toastify'

export const getblogs = createAsyncThunk('blog/get-blogs', async thunkAPI => {
  try {
    return await blogService.getBlogs()
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const getAblog = createAsyncThunk(
  'blog/get-blog',
  async (id, thunkAPI) => {
    try {
      return await blogService.getAblog(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetState = createAction('Reset_all')

const initialState = {
  blogs: [],
  singleBlog: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}
export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAblog.pending, state => {
        state.isLoading = true
      })
      .addCase(getAblog.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.SingleBlog = action.payload
      })
      .addCase(getAblog.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if (state.isError === true) {
          toast.error(action?.payload?.response?.data?.message)
        }
      })
      .addCase(getblogs.pending, state => {
        state.isLoading = true
      })
      .addCase(getblogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogs = action.payload
      })
      .addCase(getblogs.rejected, (state, action) => {
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
export default blogSlice.reducer
