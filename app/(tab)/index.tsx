import ParallelScrollView from "@/component/ParallelScrollView/ParallelScrollView";
import styled from "@emotion/native";
import LandingCard from "@/component/Crad/LandingCard";
import {View} from "react-native";
import Animated, {useAnimatedRef} from "react-native-reanimated";

const CardWrapView = styled.View`
  gap: 12px
`

const CulScrolling = styled.View`
  flex-direction: row;
  gap: 6px;
  overflow: scroll;
  padding-bottom: 8px;
`

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`

const LandingCardData = [
  {
    image: require('@/assets/images/nailart/nail_art_1.jpg'),
    maker: '김종원',
    title: 'warm 컬러를 활용한 네일 아트',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_2.jpg'),
    maker: '전원태',
    title: '로벨리아 은하수의 밤하늘',
    categories: ['꽃', '별', 'cool', '한손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_3.jpg'),
    maker: '이정화',
    title: '여아트위터 자켓',
    categories: ['리본', 'cute', '분홍']
  },
  {
    image: require('@/assets/images/nailart/nail_art_4.jpg'),
    maker: '김주현',
    title: '2024 multi 팬톤 colored',
    categories: ['유행', 'PANTONE']
  },
  {
    image: require('@/assets/images/nailart/nail_art_5.jpg'),
    maker: '이주연',
    title: 'Red Slope Colored',
    categories: ['red', 'fancy']
  },
  {
    image: require('@/assets/images/nailart/nail_art_6.jpg'),
    maker: '김주현',
    title: '오렌지색과 블루의 믹스 매치',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_7.jpg'),
    maker: '이주연',
    title: 'Rainbow color의 다양한 모습',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_8.jpg'),
    maker: '김종원',
    title: 'warm 컬러를 활용한 네일 아트',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_9.jpg'),
    maker: '이정화',
    title: 'Black and Pink',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_10.jpg'),
    maker: '김주현',
    title: 'Red nail art in alignment',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_11.jpg'),
    maker: '전원태',
    title: '내손의 블랙 스타',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_12.jpg'),
    maker: '전원태',
    title: '크리스마스의 행복',
    categories: ['warm', 'red', '두손']
  },
]

const Index = () => {
  const force_scroll_ref = useAnimatedRef<Animated.ScrollView>();
  const event_scroll_ref = useAnimatedRef<Animated.ScrollView>();
  const maker_scroll_ref = useAnimatedRef<Animated.ScrollView>();
  const fit_scroll_ref = useAnimatedRef<Animated.ScrollView>();
  const force_list = LandingCardData;
  const event_list = LandingCardData;
  const maker_list = LandingCardData;
  const fit_list = LandingCardData;

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  return (
    <>
      <ParallelScrollView>
        <CardWrapView>
          <TitleText>주목할 만한 디자인</TitleText>
          <Animated.ScrollView
            ref={force_scroll_ref}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 8}}
          >
            {force_list.map((data, index) => (
              <LandingCard key={index} {...data}/>
            ))}
          </Animated.ScrollView>
        </CardWrapView>
        <CardWrapView>
          <View>
            <TitleText>크리스마스</TitleText>
            <TitleText>나만의 스페셜한 느낌</TitleText>
          </View>
          <Animated.ScrollView
            ref={event_scroll_ref}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 8}}
          >
            {event_list.reverse().map((data, index) => (
              <LandingCard key={index} {...data}/>
            ))}
          </Animated.ScrollView>
        </CardWrapView>
        <CardWrapView>
          <View>
            <TitleText>인기 디자이너</TitleText>
            <TitleText>우리의 파워를 보여주겠다.</TitleText>
          </View>
          <Animated.ScrollView
            ref={maker_scroll_ref}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 8}}
          >
            {shuffleArray(maker_list).map((data, index) => (
              <LandingCard key={index} {...data}/>
            ))}
          </Animated.ScrollView>
        </CardWrapView>
        <CardWrapView>
          <TitleText>당신을 위한 맞춤 추천</TitleText>
          <Animated.ScrollView
            ref={fit_scroll_ref}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 8}}
          >
            {shuffleArray(fit_list).map((data, index) => (
              <LandingCard key={index} {...data}/>
            ))}
          </Animated.ScrollView>
        </CardWrapView>
      </ParallelScrollView>
    </>
  );
}


export default Index