import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BarraDeNavegacion } from './components/layout/navBar'
import { Traductor } from './pages/dashboard/traductor'
function App() {
  
  return (
    <>
      <BarraDeNavegacion/>
      <Routes>
        <Route path='/' element={<Traductor/>}></Route>
        {/*<Route path='/traductor' element={<Traductor/>}></Route>*/}
      </Routes>
    </>
  )
}

export default App
