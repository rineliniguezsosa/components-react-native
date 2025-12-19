import React, { useContext } from 'react';
import { CustomView,Title,Button } from '../../components';
import { View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';


export const ChangeThemeScreen = () => {
  const { setTheme } = useContext(ThemeContext)
  return (
    <CustomView margin>
      <Title text="Cambiar el tema" safe/>

      <Button
        text="Dark"
        onPress={() => setTheme('dark')}
      />

      <View style={{marginTop:10}}/>

      <Button
        text="Light"
        onPress={() => setTheme('light')}
      />
    </CustomView>
  );
};
