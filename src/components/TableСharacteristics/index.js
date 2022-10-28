import React from 'react'
import styles from './TableСharacteristics.module.scss'
import data from './data.json'
const TableСharacteristics = () => {
  return (
    <div className={styles.table}>
      <h3>характеристики</h3>
      <div className={styles.table_characteristic}>
        {data.map(({ title, id, subTitle, description }) => (
          <div key={id} className={styles.table_inner}>
            <h3 className={styles.title_table}>{title}</h3>
            <div className={styles.info_table}>
              <div className={styles.info_title}>
                {subTitle.map((data, i) => (
                  <span key={i} className={styles.info_title_text}>
                    {data}
                  </span>
                ))}
              </div>
              <div className={styles.info_text}>
                {description.map((data, i) => (
                  <span key={i} className={styles.info_text_name}>
                    {data}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableСharacteristics
