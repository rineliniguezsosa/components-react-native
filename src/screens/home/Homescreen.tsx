/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/theme';
import { Title } from '../../components/ui/Title';
import { menuItems } from '../../helpers/menu.items';
import { MenuItemList } from '../../components/ui/MenuItemList';

export const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <View style={{marginTop:30}}/>
          <Title text="Opciones de menú" safe/>
          {menuItems.map((item) => (
            <MenuItemList key={item.component} {...item}/>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
