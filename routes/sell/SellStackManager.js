import React from "react";
import Sell from "../sell/Sell";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../../Theme";

const SellStack = createStackNavigator();
export default function SellStackManager() {
  return (
    <SellStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.mainBackgroundColor,
        },
      }}
    >
      <SellStack.Screen name="Sell" component={Sell} />
    </SellStack.Navigator>
  );
}
