/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { View,Text,StyleSheet,Pressable, Animated, Easing } from 'react-native';
import { colors } from '../../styles/colors';

export const Animation102BounceScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const boxAnim = useRef(new Animated.Value(-100)).current;

  const fadeIn = () =>{
    Animated.timing(boxAnim,{
        toValue:200,
        duration:700,
        useNativeDriver:true,
        easing:Easing.bounce,
    }).start(()=> console.log('yes'));

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

    boxAnim.resetAnimation();
  };

  return (
    <View style={styles.constainer}>
      <Text>Animation101Screen</Text>

      <Animated.View
        style={[styles.purpleBox,{opacity:fadeAnim,transform:[{translateY:boxAnim}]}]}
      />

      <Pressable style={{marginTop:50}} onPress={fadeIn}><Text>Fedin</Text></Pressable>
      <Pressable style={{marginTop:50}} onPress={fadeOut}><Text>FedOut</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  purpleBox:{
    backgroundColor:colors.primary,
    width:150,
    height:150,
  },
});
