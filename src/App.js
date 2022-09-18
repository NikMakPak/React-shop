import data from './data/data.json'
import CardsBlock from './components/CardsBlock'

function App() {
  return (
    <div className='root'>
      {/*<CardsBlock title={'hi'} value={'32'}/>*/}
      {data.map((item, i) => (
        <CardsBlock key={i} props={item} index={i} />
      ))}
    </div>
  )
}

export default App
