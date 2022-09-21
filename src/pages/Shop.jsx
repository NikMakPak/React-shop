import React, { useState } from 'react'
import Header from '../components/header/Header'
import data from '../data/data.json'
import GroupsBlock from '../components/groupsBlock/GroupsBlock'
import CardsBlock from '../components/cardsBlock/CardsBlock'
import Modal from '../components/modal/Modal'

const Shop = () => {
  const [clickedCard, setClickedCard] = useState('')
  const ClickedCardState = jsxElement => {
    setClickedCard(jsxElement)
  }
  return (
    <>
      <Header />
      {data.groupData.map((item, i) => (
        <GroupsBlock key={i} props={item} func={ClickedCardState} index={i} />
      ))}
      {data.cardsData.map((item, i) => (
        <CardsBlock key={i} props={item} func={ClickedCardState} index={i} />
      ))}
      {clickedCard && <Modal content={clickedCard} func={ClickedCardState} />}
    </>
  )
}

export default Shop
