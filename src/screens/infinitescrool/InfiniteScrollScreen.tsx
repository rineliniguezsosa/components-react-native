/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
// import { Title } from '../../components/ui/Title';
// import { colors } from '../../styles/colors';

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0,1,2,3,4,5,6]);
    console.log(setNumbers);

    const loadMore = () => {
        console.log('this is the end');
        const newArray = Array.from({length:6},(_,i) => numbers.length + i);
        setNumbers([...numbers,...newArray]);
    };
  return (
    <CustomView>
      {/* <Title safe text="InfiniteScrollScreen"/> */}

      <FlatList
        data={numbers}
        onEndReached={loadMore} //cuando llega al final
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        renderItem={({item})=>(
            <Image style={{height:400,width:'100%'}} source={{uri:`https://picsum.photos/id/${item}/500/400`}}/>
            // <Text  style={{
            //     height:300,
            //     backgroundColor:colors.primary,
            //     fontSize:50,
            //     color:'white',
            // }}>{item}</Text>
        )}
        ListFooterComponent={()=>(
            <View style={{height:150,justifyContent:'center'}}>
                <ActivityIndicator/>
            </View>
        )}
      />
    </CustomView>
  );
};
