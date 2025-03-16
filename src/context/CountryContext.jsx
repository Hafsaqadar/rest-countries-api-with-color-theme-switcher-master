import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

export const useCountries = () => useContext(CountryContext);

export const CountryProvider =({children}) => {
    const [countries, setCountries] = useState ([]);
    
    const [filteredCountries, setFilteredCountries] = useState([]);

    const [selectedRegion, setSelectedRegion] = useState('');

//function to filter countries

const filterByRegion = (region) =>{
    setSelectedRegion(region);
    console.log('Filtering by region:', region);
    if (region === '') {
        setFilteredCountries(countries)
    } else {
        const filtered = countries.filter(country =>
            country.region.toLowerCase() === region.toLowerCase()
        );
        setFilteredCountries(filtered);
    }
};

return(
    <CountryContext.Provider value={{
     countries,
     setCountries,
     filteredCountries,
     setFilteredCountries,
     selectedRegion,
     filterByRegion

    }}>
        {children}
    </CountryContext.Provider>
)
}