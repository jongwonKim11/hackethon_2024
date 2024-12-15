import { Stack } from "expo-router";
import { Text, View } from "react-native";
import styled from "@emotion/native";
import IconSymbol from "@/component/Icon/IconSymbol";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";

const SelectView = styled.View`
  padding: 40px 10px 16px;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
`

const MakingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #FFF;
`

const OptionView = styled.View`
  flex: 1;
  justify-content: center;
  gap: 4px;
`

const SelectText = styled.Text`
  justify-content: center;
  align-items: center;
  display: flex;
`

const MakerPage = () => {
  const [select_type, setSelectType] = useState('');

  const SelectType = (type: string) => {
    if (select_type === type) {
      setSelectType('');
    } else {
      setSelectType(type);
    }
  }
  return (
    <>
      <SelectView>
        <OptionView>
          <SelectText onPress={() => SelectType('shape')}>
            <IconSymbol
              IconComponent={Ionicons}
              color={select_type === 'shape' ? '#16a1ff' : '#999'}
              name={'shapes-outline'}
            />
            <Text
              style={{
                color: select_type === 'shape' ? '#16a1ff' : '#999'
              }}
            >
                모양
            </Text>
          </SelectText>
        </OptionView>
        <OptionView>
          <SelectText onPress={() => SelectType('color')}>
            <IconSymbol
              IconComponent={Ionicons}
              color={select_type === 'color' ? '#16A1FF' : '#999'}
              name={'color-palette-outline'}
            />
            <Text
              style={{
                color: select_type === 'color' ? '#16a1ff' : '#999'
              }}
            >
              색상
            </Text>
          </SelectText>
        </OptionView>
      </SelectView>
      <MakingView style={{flex: 1}}>
        
      </MakingView>
    </>
  );
}


export default MakerPage