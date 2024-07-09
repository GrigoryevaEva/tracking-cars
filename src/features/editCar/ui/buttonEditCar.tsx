import { selectCar } from "../../../entity/car/carDetail"
import { ICarDetail } from "../../../shared/api/car"
import { useAppDispatch } from "../../../shared/lib/redux"
import { toggleChangeStatus } from "../model/editCarSlice"

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
    <button onClick={handleChangeEditCarStatus}>E</button>
  )
}
