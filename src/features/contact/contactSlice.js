import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import QueryService from './contactServices'
import { toast } from 'react-toastify'

export const createQuery = createAsyncThunk(
  'Query/create-Querys',
  async (data, thunkAPI) => {
    try {
      return await QueryService.postQuery(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetState = createAction('Reset_all')

const initialState = {
  query: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}
export const QuerySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createQuery.pending, state => {
        state.isLoading = true
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.contactQ = action.payload
        if (state.isSuccess) {
          toast.success('Contact Form Submitted Successfully !')
        }
      })
      .addCase(createQuery.rejected, (state, action) => {
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
export default QuerySlice.reducer
