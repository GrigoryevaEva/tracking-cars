import { createSlice } from '@reduxjs/toolkit'
import { ICarDetailState } from './types';

const initialState: ICarDetailState = {
  carDetail: {
    id: 0,
    name: '',
    model: '',
    year: 0,
    color: '',
    price: 0,
    latitude: 0,
    longitude: 0,
  }
}

const carDetailSlice = createSlice({
  name: 'carDetail',
  initialState,
  reducers: {}
});

export const {} = carDetailSlice.actions

export default carDetailSlice.reducer