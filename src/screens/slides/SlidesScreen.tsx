import { useState,useRef } from 'react';
import { View, Text, ImageSourcePropType, FlatList, useWindowDimensions,Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { colors } from '../../styles/colors';
import { globalStyles } from '../../styles/theme';
import { Button } from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../presentation/assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../presentation/assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../presentation/assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {

  const [currentIndexSlide, setCurrentIndexSlide] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { goBack } = useNavigation();

  const onScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentIndexSlide(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToSlide = (index:number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };

  return (
    <View style={{
        flex:1,
        backgroundColor: colors.background,
    }}>
      <FlatList
        ref={flatListRef}
        data={items}
        renderItem={({item}) => <SlideItem item={item}/>}
        keyExtractor={item => item.title}
        horizontal
        scrollEnabled={false}
        pagingEnabled
        onScroll={onScroll}
      />

      {
        currentIndexSlide === items.length -1 ?
        (
          <Button
            text="Finalizar"
            onPress={() => goBack() }
            style={{ position: 'absolute', bottom: 60, right: 30, width: 100}}
          />
        )
        :
        (
          <Button
            text="Siguiente"
            onPress={() => scrollToSlide(currentIndexSlide + 1)}
            style={{ position: 'absolute', bottom: 60, right: 30, width: 100}}
          />
        )
      }
    </View>
  );
};

interface SlideItemProps {
  item:Slide
}

const SlideItem = ({item}:SlideItemProps) => {
  const { width } = useWindowDimensions();
  const {img,desc,title} = item;
  return (
    <View 
      style={{
        flex:1,
        backgroundColor:'white',
        borderRadius:5,
        padding:40,
        justifyContent:'center',
        width: width
      }}
    >
      <Image
        source={img}
        style={{
          width:width* 0.7,
          height:width * 0.7,
          resizeMode:'center',
          alignSelf:'center'
        }}
      />

      <Text
        style={[
          globalStyles.title,
          {color:colors.primary},
        ]}
      >
        {title}
      </Text>

      <Text style={{color:colors.text,marginTop:20}}>
        {desc}
      </Text>

    </View>
  );
};