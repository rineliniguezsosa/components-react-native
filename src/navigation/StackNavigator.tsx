import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SlidesScreen,
  AlertScreen,
  InfiniteScrollScreen,
  TextInputScreen,
  ModalScreen,
  PullToRefreshScreen,
  CustomSectionListScreen,
  SwitchScreen,
  HomeScreen,
  Animation101Screen,
  Animation102BounceScreen,
  Animation102Screen,
  ChangeThemeScreen
} from '../screens';
import { ThemeContext } from '../context/ThemeContext';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
              backgroundColor: colors.background,
            },
        }}
        initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Animation101Screen" component={Animation101Screen}/>
      <Stack.Screen name="Animation102BounceScreen" component={Animation102BounceScreen}/>
      <Stack.Screen name="Animation102Screen" component={Animation102Screen}/>
      <Stack.Screen name="SwitchScreen" component={SwitchScreen}/>
      <Stack.Screen name="AlertScreen" component={AlertScreen}/>
      <Stack.Screen name="TextInputScreen" component={TextInputScreen}/>
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen}/>
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen}/>
      <Stack.Screen name="ModalScreen" component={ModalScreen}/>
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen}/>
      <Stack.Screen name="SlidesScreen" component={SlidesScreen}/>
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen}/>
    </Stack.Navigator>
  );
};
