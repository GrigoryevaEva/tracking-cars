import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false
}

const editCarSlice = createSlice({
  name: 'editCar',
  initialState,
  reducers: {
    toggleChangeStatus: (state) => {
      state.status = !state.status
    }
  }
});

export const {
  toggleChangeStatus,
} = editCarSlice.actions

export default editCarSlice.reducer