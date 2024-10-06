/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,Text,Pressable,StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    name:string,
    icon:string,
    component:string
}

export const MenuItemList = ({name,icon,component}:Props) => {
  return (
    <Pressable onPress={()=> console.log('items')}>
      <View style={{...styles.constainer,backgroundColor:colors.background}}>
        <Icon name={icon} size={25} style={{marginRight:10,color:colors.primary}}/>
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
