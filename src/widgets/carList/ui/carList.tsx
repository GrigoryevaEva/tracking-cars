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
        <div className={`${style.card__colorDecorate} ${style[`${car.color}`]}`}></div>
        <div className={style.card__info}>
          <p className={style.card__name}>
            <span>{car.name} </span>
            <span>{car.model}</span>
          </p>
          <p className={style.card__props}>
            <span>{car.year}</span>
            <span>&#183;</span>
            <span>{car.price}₽</span>
          </p>
        </div>
        <DeleteCar id={car.id} />
        <ButtonEditCar car={car}/>
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
