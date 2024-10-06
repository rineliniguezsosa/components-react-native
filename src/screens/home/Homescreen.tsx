import React from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/theme';
import { Title } from '../../components/ui/Title';

export const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Homescreen"/>
        </ScrollView>
      </View>
    </View>
  );
};
