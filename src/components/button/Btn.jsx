import React from 'react'
import css from './Btn.module.css'
const Btn = ({ children, ...props }) => {
  return (
    <button {...props} className={css.btn}>
      {children}
    </button>
  )
}

export default Btn
