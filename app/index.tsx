import React, {useEffect} from 'react';
import styled from "@emotion/native";
import {Stack, useNavigation} from "expo-router";

const landing_image = require('@/assets/images/landing/landing_image.png')

const LandingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #FFF;
`

const LandingImage = styled.Image`
  width: 100%;
  height: 100%;
`

const Index = () => {
  const history = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      history.navigate('(tab)');
  }, 1000)
 }, [history]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LandingView >
        <LandingImage source={landing_image} />
      </LandingView>
    </>
  );
}

export default Index