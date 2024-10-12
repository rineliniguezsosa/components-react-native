/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, SectionList } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { heroes } from '../../helpers/heroes';
import { globalStyles } from '../../styles/theme';
import { colors } from '../../styles/colors';

export const CustomSectionListScreen = () => {
  return (
    <CustomView margin>
      <Title safe text="CustomSectionListScreen"/>
      <SectionList
        sections={heroes}
        keyExtractor={item => item}
        renderItem={({item})=> (
            <Text style={{marginVertical:2}}>{item}</Text>
        )}
        renderSectionHeader={(item) => (
                <Text style={{...globalStyles.subTitle,backgroundColor:colors.background}}>
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
