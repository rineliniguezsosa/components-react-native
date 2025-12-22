/* eslint-disable react-native/no-inline-styles */
// import React, { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/theme';
import { Title } from '../../components/ui/Title';
import { menuItems } from '../../helpers/menu.items';
import { MenuItemList } from '../../components/ui/MenuItemList';
import { CustomView } from '../../components';
// import { ThemeContext } from '../../context/ThemeContext';

export const HomeScreen = () => {
  // const { colors } = useContext(ThemeContext);
  return (
    <CustomView>
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <View style={{marginTop:30}}/>
          <Title text="Opciones de menú" safe/>
          {menuItems.map((item,index) => (
            <MenuItemList 
            key={item.component}
            {...item} 
            isFirst={index === 0}
            isLast={index === menuItems.length - 1}/>
          ))}
        </ScrollView>
      </View>
    </View>
    </CustomView>
  );
};
