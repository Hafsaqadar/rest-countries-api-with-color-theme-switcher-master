import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CountryContext } from '../../context/CountryContext';


const CountryDetails = () => {
  const {countryCode} = useParams();
  const navigate = useNavigate();
  const {countries} = useContext(CountryContext);


  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    console.log("Countries in Context:", countries);
    // If countries exist in context, find the country
    if (countries.length > 0) {
      const foundCountry = countries.find((c) => c.cca3 === countryCode);
      setCountry(foundCountry);
      setLoading(false);
    } else {
      // Fetch only the selected country if the list is empty (on reload)
      fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then((res) => res.json())
        .then((data) => {
          setCountry(data[0]);
          setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching country:", error);
          setCountry(null);
          setLoading(false);
        });
    }
  }, [countryCode, countries]);

  
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
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Back to Home
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
        <div className='font-light'>
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
          <p className="text-2xl mb-4">
            <strong>Borders:</strong>{" "}
            {country.borders ? country.borders.join(", ") : "None"}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
 




  )
}

export default CountryDetails

