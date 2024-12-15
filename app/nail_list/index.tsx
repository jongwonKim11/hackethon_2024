import ParallelScrollView from "@/component/ParallelScrollView/ParallelScrollView";
import NailListCard from "@/component/Crad/NailListCard";
import SearchHeaderView from "@/component/SearchHeaderView/SearchHeaderView";

const CardDataList = [
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
  {
    image: require('@/assets/images/nailart/nail_art_13.jpg'),
    maker: '이정화',
    title: 'Super Star',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_14.jpg'),
    maker: '김주현',
    title: '화이트 크리스 마스의 따듯함',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_15.jpg'),
    maker: '전원태',
    title: '그날 따뜻한 모래 해변',
    categories: ['warm', 'red', '두손']
  },
  {
    image: require('@/assets/images/nailart/nail_art_16.jpg'),
    maker: '전원태',
    title: '중요한 순간의 포인트',
    categories: ['warm', 'red', '두손']
  },
]

const nail_list = () => {
  return (
    <>
      <SearchHeaderView is_back={true}/>
      <ParallelScrollView>
        {CardDataList.map((data, index) => (
          <NailListCard key={index} {...data}/>
        ))}
      </ParallelScrollView>
    </>
  );
}

export default nail_list