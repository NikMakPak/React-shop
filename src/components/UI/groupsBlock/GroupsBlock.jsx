import React from 'react'
import css from './GroupsBlock.module.css'
const CardsBlock = ({ props, index }) => {
  return (
    <div key={index} className={css.wrapperMargin + ' cards-block'}>
      <h2 className={'cards-block__title'}>{props.header}</h2>
      <div className={'cards-block__wrapper'}>
        {props.products.map((item, i) => (
          <div key={i} className={'card'}>
            <div className='card__img'>
              <img src={item.link} alt='product image' />
            </div>
            <h3 className={css.title + ' card__title'}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsBlock
