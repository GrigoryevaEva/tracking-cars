import { useAppDispatch } from "../../../shared/lib/redux"
import { changeValue } from "../model/sortCarListSlice"

import style from './style.module.scss'

export const SortCarList = () => {

  const dispatch = useAppDispatch()

  const handleChangeSortValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeValue(event.target.value))
  }

  return (
    <div className={style.root}>
      <select onChange={handleChangeSortValue}>
        <option value="">По умолчанию</option>
        <option value="price-more">Дороже</option>
        <option value="price-less">Дешевле</option>
        <option value="year-more">Новее</option>
        <option value="year-less">Старее</option>
      </select>
    </div>
  )
}
