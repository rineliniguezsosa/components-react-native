/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import { View,Modal, Platform } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
// import { colors } from '../../styles/colors';
import { ThemeContext } from '../../context/ThemeContext';

export const ModalScreen = () => {
  const [visible, setVisible] = useState(false);
  const { colors } = useContext(ThemeContext);

  const openModal = () =>{
    setVisible(true);
  };

  const closeModal = () =>{
    setVisible(false);
  };
  return (
    <CustomView margin>
      <Title safe text="ModalScreen"/>

      <Modal
        visible={visible}
        animationType="slide"
      >
        <View style={{flex:1,backgroundColor: colors.background}}>
          <View style={{paddingHorizontal:10}}>
            <Title text="Modal"/>
          </View>

          <View style={{flex:1}} />

          <Button style={{height:Platform.OS === 'android' ? 40 : 60,borderRadius:0}} text="Close modal" onPress={closeModal}/>
        </View>
      </Modal>

      <Button
        text="open modal"
        onPress={openModal}
      />
    </CustomView>
  );
};
