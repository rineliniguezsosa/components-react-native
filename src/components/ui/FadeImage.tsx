/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View,ActivityIndicator,Animated, StyleProp,ImageStyle } from 'react-native';
import { useAnimation } from '../../hooks/useAnimated';

interface Props {
    uri:string,
    style?:StyleProp<ImageStyle>
}

export const FadeImage = ({uri,style}:Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      {isLoading && (<ActivityIndicator size={30} color={'gray'} style={{position:'absolute'}}/>)}

      <Animated.Image
        source={{uri:uri}}
        onLoadEnd={()=>{
          fadeIn({});
          setIsLoading(false);
        }}
        style={[style,{opacity:animatedOpacity}]}/>
    </View>
  );
};
