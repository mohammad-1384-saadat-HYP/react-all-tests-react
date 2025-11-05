import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const initialState = {
    isLightTheme: true,
    light: {
        syntax: "#555",
        bg: "#eee"
    },
    dark: {
        syntax: "#ddd",
        bg: "#555"
    },
}

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialState);

    const toggleTheme = () => setTheme(prevState => ({...prevState, isLightTheme: !prevState.isLightTheme}));

    return (
        <ThemeContext.Provider value={{theme, toggleTheme: toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider