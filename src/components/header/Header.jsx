import React from 'react'
import css from './Header.module.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={css.header}>
      <h1>R-STORE</h1>
      <Link className={'link'} to={'/login'}>
        Войти
      </Link>
    </header>
  )
}

export default Header
