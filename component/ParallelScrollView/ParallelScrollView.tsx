import {ReactNode} from "react";
import styled from "@emotion/native";
import Animated, {useAnimatedRef} from "react-native-reanimated";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface IScrollView {
  children: ReactNode,
  padding?: string
}

const ParallelScroll = styled.View`
  flex: 1;
`

const MainBodyView = styled.View`
  padding: 32px 10px;
  gap: 20px;
  overflow: hidden;
  background: white;
`

const useBottomTabOverflow = () => {
  const tabHeight = useBottomTabBarHeight();
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
}

const ParallelScrollView = ({children, padding='32px 10px'}: IScrollView) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <ParallelScroll>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
      >
        <MainBodyView style={{flex: 1, padding: padding}}>{children}</MainBodyView>
      </Animated.ScrollView>
    </ParallelScroll>
  );
}

export default ParallelScrollView