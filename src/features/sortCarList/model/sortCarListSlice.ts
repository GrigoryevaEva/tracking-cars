import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

const sortCarList = createSlice({
  name: 'sortCarList',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload
    }
  }
});

export const {
  changeValue
} = sortCarList.actions

export default sortCarList.reducer