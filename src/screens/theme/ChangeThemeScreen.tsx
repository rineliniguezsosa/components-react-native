import React, { useContext } from 'react';
import { CustomView,Title,Button } from '../../components';
import { View,Text } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';


export const ChangeThemeScreen = () => {
  const { setTheme, currentTheme,colors } = useContext(ThemeContext);
  return (
    <CustomView margin>
      <Title text={`Cambiar el tema: ${currentTheme}`} safe/>

      <Button
        text="Dark"
        onPress={() => setTheme('dark')}
      />

      <View style={{marginTop:10}}/>

      <Button
        text="Light"
        onPress={() => setTheme('light')}
      />

      <View style={{marginTop:10}}/>

       <Text style={{color:colors.text}}>{JSON.stringify(colors,null,2)}</Text>
    </CustomView>
  );
};
