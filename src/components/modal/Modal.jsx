import React from 'react'
import './Modal.css'

const Modal = ({ content, func }) => {
  return (
    <div className={'modal'}>
      <div className={'modal__content'}>
        <button className={'modal__btn'} onClick={() => func('')}>
          X
        </button>
        {content}
      </div>
    </div>
  )
}

export default Modal
