import './App.css'
import Shop from './pages/Shop'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
