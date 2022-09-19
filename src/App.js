import data from './data/data.json'
import CardsBlock from './components/cardsBlock/CardsBlock'
import GroupsBlock from './components/groupsBlock/GroupsBlock'
import Header from './components/header/Header'
import './App.css'
function App() {
  return (
    <>
      <Header />
      {data.groupData.map((item, i) => (
        <GroupsBlock key={i} props={item} index={i} />
      ))}
      {data.cardsData.map((item, i) => (
        <CardsBlock key={i} props={item} index={i} />
      ))}
    </>
  )
}

export default App
