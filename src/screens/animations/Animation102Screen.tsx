import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Animation102Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: '#61dafb',
      width: 80,
      height: 80,
      borderRadius: 4,
    },
});
