import { deleteCar } from "../../../entity/car/carList"
import { useAppDispatch } from "../../../shared/lib/redux"

interface IDeleteCarProps {
  readonly id: number
}

export const DeleteCar = (props: IDeleteCarProps) => {

  const dispatch = useAppDispatch()

  const handleDeleteCar = () => {
    dispatch(deleteCar(props.id))
  }

  return (
    <button onClick={handleDeleteCar}>X</button>
  )
}
