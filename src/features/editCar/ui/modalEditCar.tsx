import { changeModel, changeName, changePrise, removeState, selectCarDetail } from "../../../entity/car/carDetail"
import { updateCar } from "../../../entity/car/carList"
import { useAppDispatch, useAppSelector } from "../../../shared/lib/redux"
import { toggleChangeStatus } from "../model/editCarSlice"

import style from './modal.module.scss'

export const ModalEditCar = () => {

  const dispatch = useAppDispatch()

  const car = useAppSelector(selectCarDetail)

  const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value))
  }
  const handleInputModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeModel(event.target.value))
  }
  const handleInputPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePrise(event.target.value))
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(updateCar(car))
    dispatch(toggleChangeStatus())
    dispatch(removeState())
  }

  const handleCancel = () => {
    dispatch(toggleChangeStatus())
    dispatch(removeState())
  }

  return (
    <div className={style.root}>
      <form className={style.form}>
        <div className={style.form__input}>
          <label htmlFor="name">Марка</label>
          <input 
            type="text" 
            id="name"
            value={car.name} 
            maxLength={20}
            onChange={handleInputNameChange}
          />
        </div>

        <div className={style.form__input}>
          <label htmlFor="model">Модель</label>
          <input 
            type="text" 
            id="model" 
            value={car.model}
            maxLength={20}
            onChange={handleInputModelChange}
          />
        </div>

        <div className={style.form__input}>
          <label htmlFor="price">Цена</label>
          <input 
            type="number" 
            id="price" 
            value={`${car.price}`}
            maxLength={20}
            onChange={handleInputPriceChange}
          />
        </div>

        <div className={style.form__buttons}>
          <button onClick={handleSubmit}>
            Сохранить
          </button>
          <button onClick={handleCancel}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  )
}
