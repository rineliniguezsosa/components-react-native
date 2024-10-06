import React from 'react';
import { View,Text,Pressable,StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

interface Props {
    name:string,
    icon:string,
    component:string
}

export const MenuItemList = ({name,icon,component}:Props) => {
  return (
    <Pressable onPress={()=> console.log('items')}>
      <View style={{...styles.constainer,backgroundColor:colors.background}}>
        MenuItemList
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    constainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:5,
    },
});
