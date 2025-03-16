import React from 'react'
import Navbar from '../components/Header/Navbar'
import Search from '../components/Hero/Search'
import FetchCountries from '../context/FetchCountries'
import { CountryProvider } from '../context/CountryContext'


const HomePage = () => {
  return (
    <CountryProvider>
    <div className="min-h-screen w-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-white overflow-x-hidden ">
      <Navbar/>
      <Search/>
      <FetchCountries/>
    </div>
    </CountryProvider>
  )
}

export default HomePage
