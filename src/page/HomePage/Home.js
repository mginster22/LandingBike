import React from 'react'
import Header from '../../components/Header'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <>
      <Header />
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
          <a href='/' className={styles.button_info}>
            ЗАКАЗАТЬ
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
