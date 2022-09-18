import data from './data/data.json'
import CardsBlock from './components/UI/cardsBlock/CardsBlock'
import GroupsBlock from './components/UI/groupsBlock/GroupsBlock'
import Header from './components/UI/header/Header'
import './App.css'
function App() {
  //  todo: сделать семант теги
  return (
    <div className='root'>
      <Header />
      {data.groupData.map((item, i) => (
        <GroupsBlock key={i} props={item} index={i} />
      ))}
      {data.cardsData.map((item, i) => (
        <CardsBlock key={i} props={item} index={i} />
      ))}
    </div>
  )
}

export default App
