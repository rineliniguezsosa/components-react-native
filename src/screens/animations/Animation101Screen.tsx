import React, { useRef } from 'react';
import { View,Text,StyleSheet,Pressable, Animated } from 'react-native';
import { colors } from '../../styles/colors';

export const Animation101Screen = () => {
  const fadeAnim = useRef(new Animated.Value(0.4)).current;
  return (
    <View style={styles.constainer}>
      <Text>Animation101Screen</Text>

      <View
        style={styles.purpleBox}
      />

      <Pressable><Text>Fedin</Text></Pressable>
      <Pressable><Text>FedOut</Text></Pressable>
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
