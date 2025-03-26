import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from '../../context/themeContext';


const Navbar = () => {
  const {toggleTheme} = useTheme();
  return (
   <header className='w-full shadow-sm bg-white dark:bg-dark-element p-8'>
    <nav className='flex items-center justify-between'>
      <h1 className=' text-xl md:text-3xl font-semibold text-light-text dark:text-white'>
        Where in the world?
      </h1>
      <button 
        className='flex items-center gap-2 md:gap-3 md:text-2xl font-medium text-light-text dark:text-white'
        onClick={toggleTheme}
      >
        <MdOutlineDarkMode className='text-xl md:text-3xl'/> Dark Mode
      </button>
    </nav>
   </header>
  )
}

export default Navbar