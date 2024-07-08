import { combineReducers, configureStore } from "@reduxjs/toolkit";
import carListReducer from "../entity/car/carList/model/carListSlice";

const rootReducer = combineReducers({
  carlist: carListReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = setupStore()