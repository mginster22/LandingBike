import React, { useState } from 'react'
import bike6 from '../../assets/images/bike6.jpg'
import bike7 from '../../assets/images/bike7.jpg'
import bike8 from '../../assets/images/bike8.jpg'
import styles from './SliderAvatar.module.scss'
const bikeArr = [bike6, bike7, bike8]

const SliderAvatar = () => {
  const [avatar, setAvatar] = useState(bike6)

  const handlerAvatar = obj => {
    setAvatar(obj)
  }
  return (
    <div className={styles.bike_avatar_wrapper}>
      <div className={styles.btn_wrapper}>
        {bikeArr.map((bike, i) => (
          <div
            className={styles.btn_item}
            key={i}
            onClick={() => handlerAvatar(bike)}
          ></div>
        ))}
      </div>
      <img src={avatar} alt='bike' className={styles.bike_avatar} />
    </div>
  )
}

export default SliderAvatar
