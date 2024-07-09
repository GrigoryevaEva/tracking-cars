import { createSlice } from '@reduxjs/toolkit'
import { ICarListState } from './types';
import { fetchCarList } from './carListThunks';

const initialState: ICarListState = {
  carList: [],
  status: 'idle',
  loading: false,
  error: null
}

const carListSlice = createSlice({
  name: 'carList',
  initialState,
  reducers: {
    deleteCar: (state, action) => {
      state.carList.splice(
        state.carList.findIndex(c => c.id === action.payload), 
        1
      )
    },
    updateCar: (state, action) => {
      state.carList.splice(
        state.carList.findIndex(c => c.id === action.payload.id), 
        1,
        action.payload
      )
    },
    sortCarList: (state, action) => {
      if (action.payload === 'price-less') {
        state.carList.sort((a, b) => a.price - b.price)
      }
      if (action.payload === 'price-more') {
        state.carList.sort((a, b) => b.price - a.price)
      }
      if (action.payload === 'year-less') {
        state.carList.sort((a, b) => a.year - b.year)
      }
      if (action.payload === 'year-more') {
        state.carList.sort((a, b) => b.year - a.year)
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarList.pending, (state) => {
        state.loading = true
        if (state.error) state.error = null
      })
      .addCase(fetchCarList.fulfilled, (state, action) => {
        state.carList = action.payload

        state.status = 'fulfilled'
        state.loading = false
        if (state.error) state.error = null
      })
      .addCase(fetchCarList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
});

export const {
  deleteCar,
  updateCar,
  sortCarList
} = carListSlice.actions

export default carListSlice.reducer