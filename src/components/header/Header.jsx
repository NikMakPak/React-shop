import React from 'react'
import css from './Header.module.css'
const Header = ({ jsxElem, fontPx }) => {
  return (
    <header className={css.header}>
      <h1 style={{ fontSize: fontPx }}>R-STORE</h1>
      {jsxElem}
    </header>
  )
}

export default Header
