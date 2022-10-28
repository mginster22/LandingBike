import React, { useState } from 'react'
import Header from '../../components/Header'
import SliderInfoBike from '../../components/SliderInfoBike'
import TableBike from '../../components/TableBike'
import girl from '../../assets/images/girl.jpg'
import pen from '../../assets/images/pen.png'
import data from '../../components/About/data.json'
import TableСharacteristics from '../../components/TableСharacteristics'
import SliderAvatar from '../../components/SliderAvatar'
import OrderForm from '../../components/Forms/OrderForm'
import bike9 from '../../assets/images/bike9.jpg'
import bike10 from '../../assets/images/bike10.jpg'
import bike11 from '../../assets/images/bike11.jpg'
import styles from './Home.module.scss'

const Home = () => {
  const [avatar, setAvatar] = useState(bike9)
  const handlerSlider = obj => {
    setAvatar(obj)
  }
  return (
    <>
      <section className={styles.info_bike_section}>
        <div className={styles.info_bike_wrapper}>
          <h2 className={styles.title}>Xiaomi Himo C26</h2>
          <h3 className={styles.sub_title}>Электрический велосипед</h3>
          <p className={styles.info_text}>
            Полная свобода передвижения и надежный транспорт для путешествий на
            любые расстояния
          </p>
          <p className={styles.info_text}>
            HIMO C26 – это новый электровелосипед от Xiaomi, который создан как
            для езды по городу, так и бездорожью. Он имеет мощный двигатель и
            емкий аккумулятор, благодаря которым способен проезжать на одном
            заряде до 100 км, что определенно выше, чем у большинства
            конкурентов. А большие колеса с пневматическими шинами, дисковые
            тормоза, 7-скоростная трансмиссия и эргономичное сидение делают
            каждую поездку гораздо приятнее.{' '}
          </p>
          <a href='#order' className={styles.button_info}>
            ЗАКАЗАТЬ
          </a>
        </div>
        <div className={styles.bike_wrapper}>
          <SliderInfoBike />
          <TableBike />
        </div>
      </section>

      <section className={styles.about_bike_section} id='description'>
        <img src={girl} alt='girl' className={styles.about_avatar} />
        <div className={styles.about_text_wrapper}>
          {data.map(({ id, title, subTitle }) => (
            <div className={styles.about_text_item} key={id}>
              <h4 className={styles.title_about}>{title}</h4>
              <p className={styles.sub_title_about}>{subTitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.characteristic_section} id='characteristics'>
        <TableСharacteristics />
        <img src={pen} alt='pen' className={styles.pen} />
      </section>

      <section className={styles.slider_avatar_section}>
        <SliderAvatar />
      </section>

      <section className={styles.order_section} id='order'>
        <h3>Заказать</h3>
        <div className={styles.order_wrapper}>
          <OrderForm />
          <div className={styles.avatar_block}>
            <div className={styles.slider_button_wrapper}>
              <div
                className={styles.gray}
                onClick={() => handlerSlider(bike10)}
              ></div>
              <div
                className={styles.white}
                onClick={() => handlerSlider(bike9)}
              ></div>
              <div
                className={styles.orange}
                onClick={() => handlerSlider(bike11)}
              ></div>
            </div>
            <img src={avatar} alt='bike' className={styles.avatar} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
