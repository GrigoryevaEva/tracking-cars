import { deleteCar } from "../../../entity/car/carList"
import { useAppDispatch } from "../../../shared/lib/redux"

import deleteIcon from '../../../shared/assets/icon/delete.svg'
import style from './style.module.scss'

interface IDeleteCarProps {
  readonly id: number
}

export const DeleteCar = (props: IDeleteCarProps) => {

  const dispatch = useAppDispatch()

  const handleDeleteCar = () => {
    dispatch(deleteCar(props.id))
  }

  return (
    <div className={style.button} onClick={handleDeleteCar}>
      <img src={deleteIcon} alt="" />
    </div>
  )
}
