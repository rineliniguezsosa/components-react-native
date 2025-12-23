/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, SectionList } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { heroes } from '../../helpers/heroes';
import { globalStyles } from '../../styles/theme';
// import { colors } from '../../styles/colors';
import { ThemeContext } from '../../context/ThemeContext';

export const CustomSectionListScreen = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <CustomView margin>
      <Title safe text="CustomSectionListScreen"/>
      <SectionList
        sections={heroes}
        keyExtractor={item => item}
        renderItem={({item})=> (
            <Text style={{marginVertical:2, color: colors.text}}>{item}</Text>
        )}
        renderSectionHeader={(item) => (
                <Text style={{...globalStyles.subTitle,backgroundColor:colors.background, color: colors.text}}>
                    {item.section.title}
                </Text>
        )}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        ListFooterComponent={()=> <Title text={`Secciones ${heroes.length}`} />}
      />
    </CustomView>
  );
};
