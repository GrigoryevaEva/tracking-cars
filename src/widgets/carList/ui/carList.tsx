import { useEffect } from 'react'
import { fetchCarList, selectCarList, selectCarListError, selectCarListLoading, selectCarListCompleted, sortCarList } from '../../../entity/car/carList'
import { useAppDispatch, useAppSelector } from '../../../shared/lib/redux'

import style from './style.module.scss'
import { DeleteCar } from '../../../features/deleteCar'
import { ButtonEditCar } from '../../../features/editCar'
import { selectSortCarListValue } from '../../../features/sortCarList'

export const CarList = () => {
  const dispatch = useAppDispatch()

  const carList = useAppSelector(selectCarList)
  const carListCompleted = useAppSelector(selectCarListCompleted)
  const carListLoading = useAppSelector(selectCarListLoading)
  const carListError = useAppSelector(selectCarListError)

  const sortValue = useAppSelector(selectSortCarListValue)
  

  useEffect(() => {
    if (!carListCompleted) dispatch(fetchCarList())
  }, [])

  useEffect(() => {
    dispatch(sortCarList(sortValue))
  }, [sortValue])

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

  const renderContent = () => {
    if (carListLoading) return <p>Загрузка...</p>
    if (carListError) return <p>{`Ошибка: ${carListError.messageError}`}</p>
    if (carList.length === 0) return <p>Нет машин</p>
    return renderCarList()
  }

  return (
    <div className={style.root}>
      {renderContent()}
    </div>
  )
}
