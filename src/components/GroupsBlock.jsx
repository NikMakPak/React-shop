import React from 'react'

const CardsBlock = ({ props, index }) => {
  return (
    <div key={index} className={'cards-block'}>
      <h2>{props.header}</h2>
      {props.products.map((item, i) => (
        <div key={i} className={'card'}>
          <img src={item.link} alt='product image' />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default CardsBlock
