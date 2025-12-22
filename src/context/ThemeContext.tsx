import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkcolors, lightcolors, ThemeColors } from '../styles/colors';
import { Appearance, AppState } from 'react-native';

type ThemeColor = 'dark' | 'light';

interface ThemeContextProps {
    currentTheme: ThemeColor,
    colors: ThemeColors,
    setTheme: (theme:ThemeColor) => void
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}:PropsWithChildren) => {
    const [currentThemeState, setUseTheme] = useState<ThemeColor>('light');
    // const scheme = useColorScheme();

    //tema por el sistema operativo
    // useEffect(() => {
    //     if(scheme === 'dark'){
    //         setUseTheme('dark');
    //     }else {
    //         setUseTheme('light');
    //     }
    // },[scheme]);

    //tema por el estado de la aplicación
    useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      console.log('estado: ',nextAppState);
      const colorScheme = Appearance.getColorScheme();
      setUseTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });

    return () => {
      subscription.remove();
    };
  }, []);

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
