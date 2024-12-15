import styled from "@emotion/native";

interface ICard {
  image: any,
  maker: string,
  title: string,
  categories: string[]
}

const CardView = styled.View`
  flex-direction: row;
  gap: 10px;
`

const CardImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 4px;
`

const TextView = styled.View`
  gap: 8px;
  width: calc(100% - 130px);
  justify-content: center;
`

const MakerText = styled.Text`
  font-size: 14px;
  color: darkgray;
`

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 500;
`

const CategoryView = styled.View`
  flex-flow: row wrap;
  gap: 4px
`

const CategoryBadge = styled.Text`
  color: #e9a1c0;
  background: #fdeff5;
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 4px;
`

const NailListCard = ({image, categories, maker, title}: ICard) => {
  return (
    <CardView>
      <CardImage source={image}/>
      <TextView>
        <MakerText>{maker}</MakerText>
        <TitleText>{title}</TitleText>
        <CategoryView>
          {categories.map((data, index) => (
            <CategoryBadge key={index}>{data}</CategoryBadge>
          ))}
        </CategoryView>
      </TextView>
    </CardView>
  );
}

export default NailListCard