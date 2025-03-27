import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CountryContext } from '../../context/CountryContext';
import { FaArrowLeft } from "react-icons/fa";




const CountryDetails = () => {
  const {countryCode} = useParams();
  const navigate = useNavigate();
  const {countries} = useContext(CountryContext);
  const [borderCountries, setBorderCountries] = useState([]); // State for border country names
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borderLoading, setBorderLoading] = useState(true);

  useEffect(() => {

    console.log("Countries in Context:", countries);
    // If countries exist in context, find the country
    if (countries.length > 0) {
      const foundCountry = countries.find((c) => c.cca3 === countryCode);
      setCountry(foundCountry);
      setLoading(false);
    }
    
    
  
  else {
      // Fetch only the selected country if the list is empty (on reload)
      fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then((res) => res.json())
        .then((data) => {
          setCountry(data[0]);
          setLoading(false);

           // Fetch border country names
           if (data[0]?.borders) {
            fetchBorderCountryNames(data[0].borders);
          }
          
        })

       
        .catch((error) => {
            console.error("Error fetching country:", error);
          setCountry(null);
          setLoading(false);
        });
    }
  }, [countryCode, countries]);


  // Function to fetch border country names
  const fetchBorderCountryNames = async (borders) => {
    try {
      const responses = await Promise.all(
        borders.map((code) =>
          fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((res) =>
            res.json()
          )
        )
      );
      const names = responses.map((data) => data[0]?.name?.common || "Unknown");
      setBorderCountries(names); // Update state with border country names
      setBorderLoading(false); 
    } catch (error) {
      console.error("Error fetching border countries:", error);
      setBorderLoading(false);
    }
  };

  
  // Handle loading state
  if (loading) {
    return <div className="text-center p-4">Loading country data...</div>;
  }

  if (!country) {
     return <div className="text-center p-4">Country not found!</div>;
  }


  
  return (


<div className="p-8">
  <button
    onClick={() => navigate("/")}
    className="cursor-pointer font-normal  mt-10 text-light-text text-2xl inline-flex gap-2 items-center justify-center bg-white dark:bg-dark-element dark:text-white hover:bg-light-bg hover:dark:bg-dark-bg py-4 px-14 rounded-md shadow-md">
    <FaArrowLeft />
    Back
  </button>

  <div className=" mt-20 flex flex-col lg:flex-row items-start gap-8">
    {/* Country Flag */}
  
 <img 
 className=" w-full h-auto object-cover lg:w-2/5
 shadow-lg rounded-md"
src={country.flags.png} alt="Country Flag" /> 

    {/* Country Details */}
    <div className="flex-1  lg:ml-20">
      <h1 className="text-5xl font-semibold mb-8">{country.name.common}</h1>

      {/* Two-Sided Layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 mt-11 lg:w-450">
        {/* Left Column */}
        <div className='font-light'>
          <p className="text-2xl mb-4 ">
            <strong>Official Name:</strong> {country.name.official}
          </p>
          <p className="text-2xl  mb-4">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p className="text-2xl mb-4">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="text-2xl mb-4">
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p className="text-2xl mb-4">
            <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
          </p>
        </div>

        {/* Right Column */}
        <div className='font-light lg:ml-10'>
          <p className="text-2xl mb-4">
            <strong>Top Level Domain:</strong> {country.tld ? country.tld[0] : "N/A"}
          </p>
          <p className="text-2xl mb-4">
            <strong>Currencies:</strong>{" "}
            {Object.values(country.currencies || {})
              .map((currency) => currency.name)
              .join(", ")}
          </p>
          <p className="text-2xl mb-4">
            <strong>Languages:</strong>{" "}
            {Object.values(country.languages || {}).join(", ")}
          </p>
          </div>
          </div>
          <div className='flex flex-col mt-8'>
          <div className='flex flex-wrap gap-2 '>

            <strong className='text-2xl'>Border Countries:</strong>
           
         

                 {borderCountries.length > 0 ?(
                  borderCountries.map((borderName, index) =>(
                <button
           className="text-light-text text-xl bg-white dark:bg-dark-element dark:text-white px-4 py-1 mr-4  rounded-sm shadow-sm cursor-pointer hover:bg-light-bg hover:dark:bg-dark-bg"
           onClick={() => navigate(`/country/${country.borders[index]}`)}
           >
      
           {borderName}
           </button>


              ))
            ): (
                <p className="text-2xl">None</p>
              )}


            </div>
           
         
        
          </div>
        
      
    </div>
  </div>
</div>
 




  )
}

export default CountryDetails

