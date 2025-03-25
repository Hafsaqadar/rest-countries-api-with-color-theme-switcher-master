import React from 'react'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import { CountryProvider } from './context/CountryContext'


const App = () => {
  return (
    <CountryProvider>
  <BrowserRouter>
    <div className='font-sans App'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/country/:countryCode' element={<CountryPage/>}/>
      </Routes>   
    </div>
    </BrowserRouter>
    </CountryProvider>
  
  )
}

export default App