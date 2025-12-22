/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useRef } from 'react';
import { Text,StyleSheet,Pressable, Animated } from 'react-native';
// import { colors } from '../../styles/colors';
import { CustomView } from '../../components';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { colors } = useContext(ThemeContext);
  const fadeIn = () =>{
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:300,
      useNativeDriver:true,
    }).start(()=> console.log('yes'));
  };

  const fadeOut = () =>{
    Animated.timing(fadeAnim,{
      toValue:0,
      duration:300,
      useNativeDriver:true,
    }).start(()=> console.log('yes'));
  };

  return (
    <CustomView style={styles.constainer}>
      <Text style={{ color:colors.text }}>Animation101Screen</Text>

      <Animated.View
        style={[styles.purpleBox,{opacity:fadeAnim},{backgroundColor:colors.primary}]}
      />

      <Pressable style={{marginTop:50}} onPress={fadeIn}><Text style={{ color:colors.text }}>Fedin</Text></Pressable>
      <Pressable style={{marginTop:50}} onPress={fadeOut}><Text style={{ color:colors.text }}>FedOut</Text></Pressable>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  constainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  purpleBox:{
    width:150,
    height:150,
  },
});
