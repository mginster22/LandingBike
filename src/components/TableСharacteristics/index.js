import React from 'react'
import styles from './TableСharacteristics.module.scss'
import data from './data.json'
const TableСharacteristics = () => {
  return (
    <div className={styles.table}>
      <h3>характеристики</h3>
      <div className={styles.table_characteristic}>
        {data.map(({ title, id, subTitle, description }) => (
          <>
            <h3 className={styles.title_table}>{title}</h3>
            <div className={styles.info_table}>
              <p className={styles.info_title}>
                {subTitle.map(data => (
                  <p>{data}</p>
                ))}
              </p>
              <p className={styles.info_text}>
                {description.map(data => (
                  <p>{data}</p>
                ))}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default TableСharacteristics
