import React, { useState } from "react";

export const ThemeContext = React.createContext();

const themes = {
  light: { background: '#fff', color: '#000'},
  dark: { background: '#171717', color: '#fff'}
}

/**
 * Higher Order Component: Theme Provider
*/

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
    name: theme
  }

  return(
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeProvider;
