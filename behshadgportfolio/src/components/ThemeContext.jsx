import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('black');

  const themeColors = {
    navBg: theme === 'light' ? 'white' : 'black',
    navText: theme === 'light' ? 'black' : 'white',
    text: theme === 'light' ? 'black' : 'white',
    hoverText: theme === 'light' ? 'blue' : 'yellow',
    bgColor: theme === 'light' ? 'white' : 'black',
    textColor: theme === 'light' ? 'black' : 'white',
  };

  return (
    <ThemeContext.Provider value={{ theme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
