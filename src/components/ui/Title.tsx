import React from 'react';
import { View,Text } from 'react-native';

interface Props {
    text:string,
    safe?:boolean,
    white?:boolean
}

export const Title = ({text,safe,white}:Props) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
