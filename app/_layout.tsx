import { Stack } from "expo-router";
import {DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name={"(tab)"} options={{headerShown: false}}/>
        <Stack.Screen name={"nail_list"} options={{headerShown: false}}/>
        <Stack.Screen name={"+not-found"}/>
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
