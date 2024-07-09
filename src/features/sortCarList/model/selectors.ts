import { createSelector } from "@reduxjs/toolkit"
import { ISortCarListState } from "./types"


const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.sortCarList
)

export const selectSortCarListValue = createSelector(
  selectBase,
  (state: ISortCarListState) => state.value
)