import React from 'react'
import { Link} from 'react-router-dom'

const CountryCard = ({ country }) => {
    console.log("Country Code (cca3):", country.cca3);
    return (
        <Link
        to={`/country/${country.cca3}`}
      >
        <div className="bg-white mt-10 dark:bg-dark-element rounded-lg shadow-md overflow-hidden hover:transform hover:scale-105 transition-transform">
            <img 
                src={country.flags.png} 
                alt={`${country.name.common} flag`} 
                className="w-full h-60 object-cover"
            />
            <div className="p-6 h-60 mt-4 px-10">
                <h2 className=" text-light-text dark:text-light-bg text-3xl mb-4 font-semibold">
                    {country.name.common}
                </h2>
                <div className="space-y-1 ">
                    <p className="text-2xl">
                    <span className="font-normal">Population: </span> {country.population.toLocaleString()}
                    </p>
                    <p className="text-2xl pt-1">
                        <span className="font-normal">Region: </span>
                        {country.region}
                    </p>
                    <p className="text-2xl pt-1">
                        <span className="font-normal">Capital: </span>
                        {country.capital ? country.capital[0] : 'N/A'}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default CountryCard
