import React from 'react'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
    <div className='font-sans App'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/country' element={<CountryPage/>}/>
      </Routes>   
    </div>
    </BrowserRouter>
  )
}

export default App