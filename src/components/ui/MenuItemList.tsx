import React from 'react';
import { View,Text } from 'react-native';

interface Props {
    name:string,
    icon:string,
    component:string
}

export const MenuItemList = ({name,icon,component}:Props) => {
  return (
    <View>
      <Text>MenuItemList</Text>
    </View>
  );
};
