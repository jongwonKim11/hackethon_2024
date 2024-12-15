import styled from "@emotion/native";
import {useNavigation} from "expo-router";
import {useState} from "react";
import {Keyboard} from "react-native";
import IconSymbol from "@/component/Icon/IconSymbol";

interface ISearchHeader {
  is_back?: boolean
}

const SearchView = styled.View`
  flex-direction: row;
  gap: 8px;
  padding: 38px 10px 16px;
  background: #FFF;
  align-items: center;
  justify-content: center;
`

const SearchInput = styled.TextInput`
  border: 1px solid gray;
  background: #f3f3f3;
  border-radius: 4px;
  padding: 10px 13px;
  flex: 1;
`

const SearchIcon = styled.Text`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40px;
  width: 28px;
`

const SearchHeaderView = ({is_back}: ISearchHeader) => {
  const history = useNavigation();
  const [input_data, setInputData] = useState('');

  const handleSubmit = () => {
    if (input_data.trim()) {
      Keyboard.dismiss();
      history.navigate('nail_list');
    } else {
      alert('값을 입력하세요!');
    }
  }

  return (
    <SearchView >
      {is_back && (
        <SearchIcon onPress={() => history.goBack()}>
          <IconSymbol color={'#000'} name={'arrow-left'} size={28}/>
        </SearchIcon>
      )}
      <SearchInput
        value={input_data}
        onChangeText={setInputData}
        placeholder={'검색어를 입력해주세요.'}
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
        style={{outline: 'none'}}
      />
      <SearchIcon onPress={handleSubmit}>
        <IconSymbol color={'#000'} name={'search'} size={28}/>
      </SearchIcon>
    </SearchView>
  );
}

export default SearchHeaderView