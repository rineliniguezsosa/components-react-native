import React, { useState } from 'react';
import { ScrollView,RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';

export const PullToRefreshScreen = () => {
  const [refresh, setRefresh] = useState(false);
  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setTimeout(()=>{
      setRefresh(true);
    },2000);
  };
  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refresh} progressViewOffset={top} onRefresh={onRefresh}/>}
    >
      <CustomView>
        <Title safe text="PullToRefreshScreen" />
      </CustomView>

    </ScrollView>
  );
};
