import {Tabs} from "expo-router";
import IconSymbol from "@/component/Icon/IconSymbol";
import {Feather} from "@expo/vector-icons";
import {StyleSheet} from "react-native";
import {BlurView} from "expo-blur";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon:({color}) => (
            <IconSymbol color={color} name={'home'} />
          )
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: '',
          tabBarIcon:({color}) => (
            <IconSymbol color={color} name={'search'}/>
          )
        }}
      />
      <Tabs.Screen
        name='maker'
        options={{
          title: '',
          tabBarIcon:({color}) => (
            <IconSymbol color={color} name={'plus-square'}/>
          )
        }}
      />
      <Tabs.Screen
        name='camera'
        options={{
          title: '',
          tabBarIcon:({color}) => (
            <IconSymbol color={color} name={'aperture'}/>
          )
        }}
      />
    </Tabs>
  );
}

export default TabLayout