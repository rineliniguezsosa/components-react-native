/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import { View,Text } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../styles/theme';
import { Button } from '../../components/ui/Button';
import { Alert } from 'react-native';

export const AlertScreen = () => {
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

      const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],{
            cancelable:true,
            onDismiss(){
                console.log('onDismiss called');
            },
        });

        const showPrompt = () =>{
            Alert.prompt(
                'Hi, what is your email ',
                'lorem',
                (valor:string)=> console.log('the value:',valor),
                'secure-text',
                'soy un valor por defecto',
                'number-pad'
            );
        };

  return (
    <CustomView style={globalStyles.globalMargin}>
        <Title safe text="Alertas"/>

        <Button style={{marginBottom:5}} onPress={createTwoButtonAlert} text="Alert two buttons"/>
        <Button style={{marginBottom:5}} onPress={createThreeButtonAlert} text="Alerta three buttons"/>
        <Button style={{marginBottom:5}} onPress={showPrompt} text="Alert Prompt"/>
    </CustomView>
  );
};
