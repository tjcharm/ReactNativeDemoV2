import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Home from "./Home";
import { theme } from "../../Theme";

const HomeStack = createStackNavigator();

export default function HomeStackManager() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.mainBackgroundColor,
        },
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
