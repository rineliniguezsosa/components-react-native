/* eslint-disable react-native/no-inline-styles */
import React, { PropsWithChildren } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../styles/colors';

interface Props extends PropsWithChildren {
    style?:StyleProp<ViewStyle>
}

export const Card = ({style,children}:Props) => {
  return (
    <View style={[{backgroundColor:colors.cardBackground,borderRadius:10,padding:10},style]}>
      {children}
    </View>
  );
};
