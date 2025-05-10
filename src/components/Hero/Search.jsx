import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import Filter from './Filter';
import { useCountries } from '../../context/CountryContext';

const Search = () => {
    const [searchInput,setSearchInput] = useState('');
    const {searchCountries} = useCountries();

    const handleChange = (e) => {
      const value = e.target.value;
      setSearchInput(value);
      searchCountries(value);
    };

   
  return (
   
    <div className="flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center w-full mt-10 px-4">
   
    <div className="bg-light-light dark:bg-dark-element flex items-center gap-2 p-2 lg:p-2 w-full shadow-md rounded-md lg:w-[430px] bg-white lg:mt-3">
    <IoIosSearch size={25} className='text-light-input dark:text-white' />
    <input type="text" 

    value={searchInput}
    onChange={handleChange}
     placeholder='Search for country...' 
     className='border-none outline-none px-2  py-2 w-full bg-white dark:bg-dark-element  text-light-input dark:text-white text-lg lg:text-lg'/>
    </div>
    
    
    
     <Filter/>
    

    </div>
    
    
    
   
   
    
  )
}

export default Search


