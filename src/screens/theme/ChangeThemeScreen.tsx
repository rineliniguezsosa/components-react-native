import React from 'react';
import { CustomView,Title,Button } from '../../components';
import { View } from 'react-native';


export const ChangeThemeScreen = () => {
  return (
    <CustomView margin>
      <Title text="Cambiar el tema" safe/>

      <Button
        text="Dark"
        onPress={() => {}}
      />

      <View style={{marginTop:10}}/>

      <Button
        text="Light"
        onPress={() => {}}
      />
    </CustomView>
  );
};
