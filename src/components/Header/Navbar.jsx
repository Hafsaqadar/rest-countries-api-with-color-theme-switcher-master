import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from '../../context/ThemeContext';


const Navbar = () => {
  const {toggleTheme} = useTheme();
  return (
   <header className='w-full shadow-sm bg-white dark:bg-dark-element p-8 md:p-5'>
    <nav className='flex items-center justify-between'>
      <h1 className=' text-xl md:text-3xl lg:text-2xl font-bold text-light-text dark:text-white'>
        Where in the world?
      </h1>
      <button 
        className='flex items-center gap-2 md:gap-3 lg:text-lg font-medium text-light-text dark:text-white'
        onClick={toggleTheme}
      >
        <MdOutlineDarkMode className='text-xl lg:text-xl'/> Dark Mode
      </button>
    </nav>
   </header>
  )
}

export default Navbar