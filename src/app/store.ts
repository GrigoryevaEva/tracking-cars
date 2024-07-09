import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carListReducer from "../entity/car/carList/model/carListSlice";
import carDetailReducer from "../entity/car/carDetail/model/carDetailSlice";

const rootReducer = combineReducers({
  carList: carListReducer,
  carDetail: carDetailReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = setupStore()