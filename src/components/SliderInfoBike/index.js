import React, { useState } from 'react'
import bike1 from '../../assets/images/bike1.jpg'
import bike2 from '../../assets/images/bike2.jpg'
import bike3 from '../../assets/images/bike3.jpg'
import bike4 from '../../assets/images/bike4.jpg'
import bike5 from '../../assets/images/bike5.jpg'
import styles from './SliderInfoBike.module.scss'
const bikeArr = [bike1, bike2, bike3, bike4, bike5]
const SliderInfoBike = () => {
  const [avatar, setAvatar] = useState(bike1)

  const handlerAvatar = obj => {
    setAvatar(obj)
  }
  return (
    <div className={styles.bike_avatar_wrapper}>
      <img src={avatar} alt='bike' className={styles.bike_avatar} />
      <div className={styles.btn_wrapper}>
        {bikeArr.map((bike, i) => (
          <div
            className={styles.btn_item}
            key={i}
            onClick={() => handlerAvatar(bike)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default SliderInfoBike
