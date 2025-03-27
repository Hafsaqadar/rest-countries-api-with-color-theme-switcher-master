import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useCountries } from '../../context/CountryContext';

const Filter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {filterByRegion} = useCountries();
    const region = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="relative inline-block text-left outline-none lg:mt-15 ">
    
        <button
        onClick={() => setIsOpen(!isOpen)}
        
        className="flex  lg:mr-10 justify-center gap-x-1.5  rounded-md bg-white dark:bg-dark-element dark:text-white px-6 py-4  text-light-text shadow-md text-2xl">
         
         Filter by Region
          <RiArrowDropDownLine className={`text-4xl ml-8 transition-transform ${isOpen  ? 'rotate-180' : ''}`} />
        </button>

         {isOpen && (
            <div className="absolute ml-10 mt-2 w-72 origin-top-right rounded-md bg-light-bg dark:bg-dark-element ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in z-50 " >
               <div className="py-1">
                {region.map((region) => (
                    <button 
                    key={region}
                   className='block w-full px-4 py-3 text-left text-light-text dark:text-white  hover:bg-light-bg dark:hover:bg-dark-bg text-2xl'
                   onClick={()=>{
                    filterByRegion(region);
                    setIsOpen(false)
                   }}> 
                   {region}
                      

                    </button>
                ))}
                    </div>
                    </div>
         )}
         </div>
              
         )}
       


export default Filter

