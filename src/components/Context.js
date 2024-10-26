import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

export const useTheme = () => useContext(Context);

export const ThemeProvider = ({ children }) => {
  const [LightTheme, setLightTheme] = useState(false);

  const toggleTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
  };

  const theme = LightTheme
    ? { 
        backgroundColor: "#f0f0f0", 
        textColor: "#000", 
        areaButton: {backgroundColor: "#d4d4d8"},
    }

    : { backgroundColor: "#000", 
        textColor: "#fff", 
        areaButton: {backgroundColor: "#262626" }
    };


  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};
