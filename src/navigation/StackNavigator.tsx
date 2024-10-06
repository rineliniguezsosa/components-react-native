import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/Homescreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    </Stack.Navigator>
  );
};
