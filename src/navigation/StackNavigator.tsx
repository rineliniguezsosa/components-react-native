import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/Homescreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';
import { Animation102BounceScreen } from '../screens/animations/Animation102BounceScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
        initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Animation101Screen" component={Animation101Screen}/>
      <Stack.Screen name="Animation102BounceScreen" component={Animation102BounceScreen}/>
    </Stack.Navigator>
  );
};
