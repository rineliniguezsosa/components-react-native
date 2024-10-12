import React from 'react';
import { ScrollView,RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={true} progressViewOffset={top}/>}
    >
      <CustomView>
        <Title safe text="PullToRefreshScreen" />
      </CustomView>

    </ScrollView>
  );
};
