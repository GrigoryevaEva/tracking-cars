import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carListReducer from "../entity/car/carList/model/carListSlice";
import carDetailReducer from "../entity/car/carDetail/model/carDetailSlice";
import { EditCarReducer } from "../features/editCar";

const rootReducer = combineReducers({
  carList: carListReducer,
  carDetail: carDetailReducer,
  editCar: EditCarReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = setupStore()