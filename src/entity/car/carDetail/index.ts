export { 
  default as CarListReducer,
  changeName,
  changeModel,
  changePrise,
  removeState,
  selectCar,
} from './model/carDetailSlice'

export {
  selectCarDetail,
} from './model/selectors'

export { type ICarDetailState } from './model/types'