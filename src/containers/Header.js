import React from 'react'

import logo from '../img/logo.svg'
import styles from './Header.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <img src={logo} alt="React" />
        <span>React Boilerplate</span>
      </h1>
    </header>
  )
}

export default Header
