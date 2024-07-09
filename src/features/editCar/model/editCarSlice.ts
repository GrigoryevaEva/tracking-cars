import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false
}

const editCarSlice = createSlice({
  name: 'editCar',
  initialState,
  reducers: {
    toggleChangeStatus: (state) => {
      if (state.status) {
        state.status = false
      } else state.status = true
    }
  }
});

export const {
  toggleChangeStatus,
} = editCarSlice.actions

export default editCarSlice.reducer