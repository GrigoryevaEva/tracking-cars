export { 
  default as CarListReducer,
  deleteCar,
  updateCar,
} from './model/carListSlice'

export { fetchCarList } from './model/carListThunks'

export {
  selectCarList,
  selectCarListStatus,
  selectCarListLoading,
  selectCarListError,
} from './model/selectors'

export { type ICarListState } from './model/types'