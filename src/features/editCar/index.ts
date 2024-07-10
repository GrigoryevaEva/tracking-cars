export { ModalEditCar } from "./ui/modalEditCar";

export { ButtonEditCar } from "./ui/buttonEditCar";

export { 
  default as EditCarReducer,
  toggleChangeStatus,
} from './model/editCarSlice'

export {
  selectEditCarStatus,
} from './model/selectors'

export { type IEditCarState } from './model/types'
