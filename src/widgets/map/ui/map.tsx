import mapImg from '../../../shared/assets/img/map.png'
import style from './style.module.scss'

export const Map = () => {
  return (
    <section className={style.root}>
      <img src={mapImg} alt="" />
    </section>
  )
}
