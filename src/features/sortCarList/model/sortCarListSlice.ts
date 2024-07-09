import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'price-more'
}

const sortCarList = createSlice({
  name: 'sortCarList',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      if (action.payload !== state.value) {
        state.value = action.payload
      }
    }
  }
});

export const {
  changeValue
} = sortCarList.actions

export default sortCarList.reducer