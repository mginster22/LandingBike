import React from 'react'
import logo from '../../assets/images/logo.png'
import data from './data.json'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt='logo' />
      <nav className={styles.menu}>
        <ul className={styles.menu_list}>
          {data.map(({ linkName, href, id }) => (
            <li className={styles.menu_list_item} key={id}>
              <a className={styles.menu_list_item_link} href={href}>
                {linkName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
