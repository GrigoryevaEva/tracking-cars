import { selectCar } from "../../../entity/car/carDetail"
import { ICarDetail } from "../../../shared/api/car"
import { useAppDispatch } from "../../../shared/lib/redux"
import { toggleChangeStatus } from "../model/editCarSlice"

import editIcon from '../../../shared/assets/icon/edit.svg'
import style from './button.module.scss'

interface IButtonEditCarProps {
  car: ICarDetail
}

export const ButtonEditCar = (props: IButtonEditCarProps) => {

  const dispatch = useAppDispatch()

  const handleChangeEditCarStatus = () => {
    dispatch(selectCar(props.car))
    dispatch(toggleChangeStatus())
  }

  return (
    <div className={style.button} onClick={handleChangeEditCarStatus}>
      <img src={editIcon} alt="" />
    </div>
  )
}
