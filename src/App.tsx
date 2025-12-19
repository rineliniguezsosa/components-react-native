import React, { PropsWithChildren } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigation/StackNavigator';
import { ThemeProvider } from './context/ThemeContext';

const AppState = ({children}:PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NavigationContainer>
  )
}

export const App = () => {
  return (
    <AppState>
      <StackNavigator/>
    </AppState>
  );
};
