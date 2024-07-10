import { createSelector } from "@reduxjs/toolkit"
import { ICarDetailState } from "./types"

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.carDetail
)

export const selectCarDetail = createSelector(
  selectBase,
  (state: ICarDetailState) => state.carDetail
)