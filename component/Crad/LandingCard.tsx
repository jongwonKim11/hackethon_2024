import styled from "@emotion/native";
import {View} from "react-native";

interface ICard {
  image: any,
  maker: string,
  title: string,
  categories: string[]
}

const LandingView = styled.View`
  max-width: 120px;
`

const CardImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 4px;
`

const TextView = styled.View`
  gap: 6px;
  margin-top: 4px;
  width: 110px;
`

const MakerText = styled.Text`
  font-size: 12px;
  color: darkgray;
`

const TitleText = styled.Text`
  font-size: 16px;
  line-height: 18.2px;
  height: 36.4px;
  overflow: hidden;
  font-weight: 500;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const CategoryView = styled.View`
  flex-flow: row wrap;
  gap: 2px
`

const CategoryBadge = styled.Text`
  color: #e9a1c0;
  background: #fdeff5;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 2px;
`

const LandingCard = ({image, categories, maker, title}: ICard) => {
  return (
    <LandingView>
      <CardImage source={image}/>
      <TextView className='text-wrap'>
        <MakerText>{maker}</MakerText>
        <TitleText>{title}</TitleText>
        <CategoryView>
          {categories.map((data, index) => (
            <CategoryBadge key={index}>{data}</CategoryBadge>
          ))}
        </CategoryView>
      </TextView>
    </LandingView>
  );
}

export default LandingCard