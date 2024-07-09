import { ModalEditCar, selectEditCarStatus } from "../../../features/editCar"
import { SortCarList } from "../../../features/sortCarList"
import { useAppSelector } from "../../../shared/lib/redux"
import { CarList } from "../../../widgets/carList"
import { Header } from "../../../widgets/header"
import { Map } from "../../../widgets/map"

import style from './style.module.scss'

export const Home = () => {
  const editCarStatus = useAppSelector(selectEditCarStatus)

  return (
    <>
      <Header />
      <main className={style.main}>
        <SortCarList />
        <CarList />
        <Map />
        
        {
          editCarStatus 
            ? <ModalEditCar />
            : <></>
        }
      </main>
    </>
  )
}
