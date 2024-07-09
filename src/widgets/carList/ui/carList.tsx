import { useEffect } from 'react'
import { fetchCarList, selectCarList, selectCarListError, selectCarListLoading, selectCarListStatus } from '../../../entity/car/carList'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/redux'

import style from './style.module.scss'
import { DeleteCar } from '../../../features/deleteCar'
import { ButtonEditCar } from '../../../features/editCar'

export const CarList = () => {
  const dispatch = useAppDispatch()

  const carList = useAppSelector(selectCarList)
  const carListStatus = useAppSelector(selectCarListStatus)
  const carListLoading = useAppSelector(selectCarListLoading)
  const carListError = useAppSelector(selectCarListError)

  useEffect(() => {
    if (carListStatus === 'idle') dispatch(fetchCarList())
  }, [])

  const renderCarList = () => (
    carList.map((car) => (
      <div key={car.id} className={style.card}>
        <div>
          <p>{car.name} {car.model}</p>
          <p>Год выпуска: {car.year}</p>
          <p>Цена: {car.price}</p>
          <p>Цвет: {car.color}</p>
        </div>
        <div>
          <DeleteCar id={car.id} />
          <ButtonEditCar car={car}/>
        </div>
      </div>
    ))
  )

  return (
    <div className={style.root}>
      {renderCarList()}
    </div>
  )
}
