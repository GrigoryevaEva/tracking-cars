import { createSlice } from '@reduxjs/toolkit'
import { ICarListState } from './types';
import { fetchCarList } from './carListThunks';

const initialState: ICarListState = {
  carList: [],
  loading: false,
  error: null
}

const carListSlice = createSlice({
  name: 'carsList',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarList.pending, (state) => {
        state.loading = true
        if (state.error) state.error = null
      })
      .addCase(fetchCarList.fulfilled, (state, action) => {
        state.carList = action.payload

        state.loading = false
        if (state.error) state.error = null
      })
      .addCase(fetchCarList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? null
      })
});

export default carListSlice.reducer