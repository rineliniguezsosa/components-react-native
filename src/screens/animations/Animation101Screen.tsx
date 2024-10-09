import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const Animation101Screen = () => {
  return (
    <View style={styles.constainer}>
      <Text>Animation101Screen</Text>

      <View
        style={styles.purpleBox}
      />
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
