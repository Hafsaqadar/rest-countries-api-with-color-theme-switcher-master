import React, { useEffect, useState } from 'react'
import CountryCard from '../components/Content/CountryCard';
import { useCountries } from './CountryContext';


// const Api_URL = "https://restcountries.com/v3.1/all";
const Api_URL = "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,cca3,subregion";

const FetchCountries = () => {
    const { 
        countries, 
        setCountries, 
        filteredCountries,  // New state for filtered results
        setFilteredCountries 
    } = useCountries();

    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       
        async function loadCountries() {
            try {
                const res = await fetch(Api_URL);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setCountries(data);
                console.log("Fetched countries:", data);
                setFilteredCountries(data);
                
            } catch (error) {
                console.error("Error fetching countries:", error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        loadCountries();
    
}, []);

    if (isLoading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;
    if (!countries.length) return <div className="text-center p-4">No countries found</div>;

    return (
        <div className=" px-8 py-10 h-48  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"> 

                {filteredCountries.map((country) => (
                    <CountryCard 
                        key={country.cca3} 
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
}

export default FetchCountries
