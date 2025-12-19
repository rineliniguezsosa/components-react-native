import { createContext, PropsWithChildren, useState } from 'react';
import { darkcolors, lightcolors, ThemeColors } from '../styles/colors';

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
        <ThemeContext.Provider
            value={{
                currentTheme:currentThemeState,
                colors: (currentThemeState === 'light' ? lightcolors : darkcolors),
                setTheme:setTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};
