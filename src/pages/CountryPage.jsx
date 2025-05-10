import React from 'react'
import Navbar from '../components/Header/Navbar'
import CountryDetails from '../components/Details/CountryDetails'




const CountryPage = () => {
 
  
  return (
    <div className='min-h-screen w-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-white overflow-x-hidden '>
    <Navbar/>
  
    <CountryDetails/>
    </div>
  )
}

export default CountryPage
