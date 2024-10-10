/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';

export const SwicthScreen = () => {
  return (
    <CustomView style={{marginTop:100,paddingHorizontal:10}}>
      <Card><Text>SwicthScreen</Text></Card>
    </CustomView>
  );
};
