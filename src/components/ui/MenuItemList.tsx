/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View,Text,Pressable,StyleSheet } from 'react-native';
// import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    name:string,
    icon:string,
    component:string,
    isFirst?: boolean,
    isLast?: boolean
}

export const MenuItemList = ({name,icon,component,isFirst = false,isLast = false}:Props) => {
  const navigation = useNavigation<any>();
  const { colors } = useContext(ThemeContext)
  return (
    <>
    <Pressable onPress={()=> navigation.navigate(component)}>
      <View style={{
        ...styles.constainer,
        backgroundColor:colors.background,
        ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
        }),
        ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
        }),
      }}>
        <Icon name={icon} size={25} style={{marginRight:10,color:colors.text}}/>
        <Text style={{color:colors.text}}>{name}</Text>
        <Icon name="chevron-forward-outline" size={25} style={{marginLeft:'auto',color:colors.text}}/>
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
