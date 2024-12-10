
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/home'
import Servicos from './Pages/servicos'
import Galeria from './Pages/galeria'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/servicos' element={<Servicos/>}/>
      <Route path='/galeria' element={<Galeria/>}/>
    
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
