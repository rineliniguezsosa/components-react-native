/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View,ActivityIndicator,Animated, StyleProp,ImageStyle } from 'react-native';

interface Props {
    uri:string,
    style?:StyleProp<ImageStyle>
}

export const FadeImage = ({uri,style}:Props) => {
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={30} color={'gray'} style={{position:'absolute'}}/>

      <Animated.Image source={{uri:uri}} style={[style]}/>
    </View>
  );
};
