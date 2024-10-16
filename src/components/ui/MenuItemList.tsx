/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,Text,Pressable,StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    name:string,
    icon:string,
    component:string
}

export const MenuItemList = ({name,icon,component}:Props) => {
  const navigation = useNavigation<any>();
  return (
    <>
    <Pressable onPress={()=> navigation.navigate(component)}>
      <View style={{...styles.constainer,backgroundColor:colors.background}}>
        <Icon name={icon} size={25} style={{marginRight:10,color:colors.primary}}/>
        <Text style={{color:colors.text}}>{name}</Text>
        <Icon name="chevron-forward-outline" size={25} style={{marginLeft:'auto',color:colors.primary}}/>
      </View>
    </Pressable>
    </>
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
