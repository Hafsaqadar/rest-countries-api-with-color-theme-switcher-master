import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme =() => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');

  };

  useEffect(() => {
  if(theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else{
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
},[theme]);

return(
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
);
};
