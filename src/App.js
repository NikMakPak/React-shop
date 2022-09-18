import data from './data/data.json'
import CardsBlock from './components/CardsBlock'
import GroupsBlock from './components/GroupsBlock'

function App() {
  return (
    <div className='root'>
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
