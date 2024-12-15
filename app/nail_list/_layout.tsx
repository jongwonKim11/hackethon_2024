import {Tabs} from "expo-router";
import IconSymbol from "@/component/Icon/IconSymbol";
import {Feather} from "@expo/vector-icons";
import {StyleSheet} from "react-native";
import {BlurView} from "expo-blur";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false,}}>
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarStyle: {display: 'none'}
        }}
      />
    </Tabs>
  );
}

export default TabLayout