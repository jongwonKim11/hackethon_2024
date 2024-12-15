import {Stack, useNavigation} from "expo-router";
import {Keyboard, Text, View} from "react-native";
import SearchHeaderView from "@/component/SearchHeaderView/SearchHeaderView";
import ParallelScrollView from "@/component/ParallelScrollView/ParallelScrollView";
import styled from "@emotion/native";

const SearchView = styled.View`
  gap: 12px;
  padding-bottom: 20px;
`

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`

const CategoriesView = styled.View`
  flex-flow: row wrap;
  gap: 8px;
`

const CategoryBadge = styled.Text`
  font-size: 14px;
  padding: 6px 10px;
  background: #F3F3F3;
  border-radius: 4px;
`

const RankingView = styled.View`
  gap: 10px;
`

const RankingText = styled.Text`
  font-size: 16px;
  padding-left: 6px;
`

const BoldText = styled.Text`
  font-weight: bold;
  padding-right: 10px;
`

const recent_texts = [
  '크리스마스', '눈', 'red', '빨간', '펄', '인기', '2024', '최신'
]

const recommend_text = [
  '겨울', '따듯한', '화이트 크리스마스', '트랜드', '꽃', 'warm', '크리스마스'
]

const ranking_text = [
  '크리스마스', '눈', '새해', 'New Year', '2025 트랜드', '이정화', '김주현', '이주연', '김종원', '전원태'
]

const SearchPage = () => {
  const history = useNavigation();
  const clickBadge = () => {
    history.navigate('nail_list');
  }
  return (
    <>
      <SearchHeaderView/>
      <ParallelScrollView padding={'16px 10px 32px'}>
        <SearchView>
          <TitleText>최근 검색어</TitleText>
          <CategoriesView>
            {recent_texts.map((text, index) => (
              <CategoryBadge key={index} onPress={clickBadge}>{text}</CategoryBadge>
            ))}
          </CategoriesView>
        </SearchView>
        <SearchView>
          <TitleText>추천 검색어</TitleText>
          <CategoriesView>
            {recommend_text.map((text, index) => (
              <CategoryBadge key={index} onPress={clickBadge}>{text}</CategoryBadge>
            ))}
          </CategoriesView>
        </SearchView>
        <SearchView>
          <TitleText>인기 검색어</TitleText>
          <RankingView>
            {ranking_text.map((text, index) => (
              <RankingText key={index} onPress={clickBadge}>
                <BoldText>{index + 1}.</BoldText>
                {text}
              </RankingText>
            ))}
          </RankingView>
        </SearchView>
      </ParallelScrollView>
    </>
  );
}


export default SearchPage