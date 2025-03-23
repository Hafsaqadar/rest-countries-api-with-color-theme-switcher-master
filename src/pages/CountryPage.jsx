import React from 'react'
import Navbar from '../components/Header/Navbar'
import CountryDetails from '../components/Details/CountryDetails'
import FetchCountries from '../context/FetchCountries'



const CountryPage = () => {
 
  
  return (
    <div className='min-h-screen w-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-white overflow-x-hidden '>
    <Navbar/>
    {/* <FetchCountries/> */}
    <CountryDetails/>
    </div>
  )
}

export default CountryPage
