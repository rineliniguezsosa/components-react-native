/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View,Modal, Platform } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';

export const ModalScreen = () => {
  const [visible, setVisible] = useState(false);

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
        <View style={{flex:1,backgroundColor:'rgba(0,0,0,0)'}}>
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
