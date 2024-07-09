import { createSelector } from "@reduxjs/toolkit"
import { IEditCarState } from "./types"

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.editCar
)

export const selectEditCarStatus = createSelector(
  selectBase,
  (state: IEditCarState) => state.status
)