import React from 'react'
import Btn from '../button/Btn'
import css from './Header.module.css'
const Header = () => {
  return (
    <header className={css.header}>
      <h1>R-STORE</h1>
      <Btn>Войти</Btn>
    </header>
  )
}

export default Header
