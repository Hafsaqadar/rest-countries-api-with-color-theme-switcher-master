import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useCountries } from '../../context/CountryContext';

const Filter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {filterByRegion} = useCountries();
    const region = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="relative inline-block text-left outline-none  lg:text-xl ">
    
        <button
        onClick={() => setIsOpen(!isOpen)}
         
        className="flex  lg:mr-10 lg:pt-3 pt-3 justify-center gap-x-1.5 lg:pl-4 rounded-md bg-white dark:bg-dark-element dark:text-white  lg:p-2 px-3 py-2  text-light-text shadow-md text-lg lg:text-lg">
         
         Filter by Region
          <RiArrowDropDownLine className={`text-4xl ml-8 lg:ml-7 transition-transform ${isOpen  ? 'rotate-180' : ''}`} />
        </button>

         {isOpen && (
            <div className="absolute ml-2 mt-2 w-52 lg:mr-10 origin-top-right rounded-md bg-light-bg dark:bg-dark-element ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in z-50 " >
               <div className="py-1">
                {region.map((region) => (
                    <button 
                    key={region}
                   className='block w-full px-4 py-1 text-left text-light-text dark:text-white  hover:bg-light-bg dark:hover:bg-dark-bg text-xl lg:text-lg'    
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

