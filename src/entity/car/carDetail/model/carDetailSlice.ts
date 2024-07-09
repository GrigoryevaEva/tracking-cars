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
  reducers: {
    addEditCar: (state, action) => {
      state.carDetail = action.payload
    },
    changeName: (state, action) => {
      state.carDetail.name = action.payload
    },
    changeModel: (state, action) => {
      state.carDetail.model = action.payload
    },
    changePrise: (state, action) => {
      state.carDetail.price = Number(action.payload)
    },
    removeState: (state) => {
      state.carDetail = {
        id: 0,
        name: '',
        model: '',
        year: 0,
        color: '',
        price: 0,
        latitude: 0,
        longitude: 0,
      }
    },
  }
});

export const {
  changeName,
  changeModel,
  changePrise,
  removeState,
  addEditCar,
} = carDetailSlice.actions

export default carDetailSlice.reducer