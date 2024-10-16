import React from 'react';
import { Text,Pressable,StyleProp,ViewStyle } from 'react-native';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/theme';

interface Props {
    text:string,
    style?:StyleProp<ViewStyle>,
    onPress:() => void
}

export const Button = ({text,style,onPress}:Props) => {
  return (
    <Pressable
        onPress={onPress}
        style={({pressed})=>([
            globalStyles.btnPrimary,
            {
                opacity:pressed ? 0.8 : 1,
                backgroundColor:colors.primary,

            },
            style,
        ])}
    >
      <Text style={[globalStyles.btnPrimaryText,{color:colors.buttonTextColor}]}>{text}</Text>
    </Pressable>
  );
};
