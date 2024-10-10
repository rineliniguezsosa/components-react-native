import React from 'react';
import { View,StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../styles/theme';

interface Props {
    style?:StyleProp<ViewStyle>,
    children?:React.ReactNode,
}
export const CustomView = ({style,children}:Props) => {
  return (
    <View style={[globalStyles.mainContainer,style]}>
      {children}
    </View>
  );
};
