import { createSelector } from "@reduxjs/toolkit"

import { ICarListState } from "./types"

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.carList
)

export const selectCarList = createSelector(
  selectBase,
  (state: ICarListState) => state.carList
)

export const selectCarListCompleted = createSelector(
  selectBase,
  (state: ICarListState) => state.completed
)

export const selectCarListLoading = createSelector(
  selectBase,
  (state: ICarListState) => state.loading
)

export const selectCarListError = createSelector(
  selectBase,
  (state: ICarListState) => state.error
)