import { createContext, PropsWithChildren, useState } from 'react';
import { lightcolors, ThemeColors } from '../styles/colors';

type ThemeColor = 'dark' | 'light';

interface ThemeContextProps {
    currentTheme: ThemeColor,
    colors: ThemeColors,
    setTheme: (theme:ThemeColor) => void
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:PropsWithChildren) => {
    const [currentThemeState, setUseTheme] = useState<ThemeColor>('light');

    const setTheme = (theme:ThemeColor) =>{
        setUseTheme(theme);
    };

    return (
        <ThemeContext.Provider value={{currentTheme:currentThemeState, colors: lightcolors,setTheme:setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
