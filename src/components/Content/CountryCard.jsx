import React from 'react'
import { Link} from 'react-router-dom'

const CountryCard = ({ country }) => {
    console.log("Country Code (cca3):", country.cca3);
    return (
        <Link
        to={`/country/${country.cca3}`}
      >
        <div className="bg-white mt-4 dark:bg-dark-element rounded-lg shadow-md overflow-hidden hover:transform hover:scale-105 transition-transform ">
            <img 
                src={country.flags.png} 
                alt={`${country.name.common} flag`} 
                className="w-full h-60 lg:h-36 object-cover"
            />
            <div className="p-6 lg:p-4 mt-4 px-10 lg:px-5 ">
                <h2 className=" text-light-text dark:text-light-bg text-2xl lg:text-xl mb-4 font-semibold">
                    {country.name.common}
                </h2>
                <div className="space-y-1 ">
                    <p className="text-sm lg:text-sm">
                    <span className="font-semibold">Population: </span> {country.population.toLocaleString()}
                    </p>
                    <p className="text-sm lg:text-sm pt-1">
                        <span className="font-semibold">Region: </span>
                        {country.region}
                    </p>
                    <p className="text-sm pt-1 lg:text-sm">
                        <span className="font-semibold">Capital: </span>
                        {country.capital ? country.capital[0] : 'N/A'}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default CountryCard
