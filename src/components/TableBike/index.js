import React from 'react'
import data from './data.json'
import styles from './TableBike.module.scss'
const TableBike = () => {
  return (
    <div className={styles.table}>
      {data.map(({ id, title, subTitle }) => (
        <div key={id} className={styles.table_item}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.sub_title}>{subTitle}</span>
        </div>
      ))}
    </div>
  )
}

export default TableBike
