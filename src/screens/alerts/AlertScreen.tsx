import React from 'react';
import { View,Text } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../styles/theme';

export const AlertScreen = () => {
  return (
    <CustomView style={globalStyles.globalMargin}>
        <Title safe text="Alertas"/>
    </CustomView>
  );
};
