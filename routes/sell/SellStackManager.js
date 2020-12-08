import React from "react";
import Sell from "../sell/Sell";
import { createStackNavigator } from "@react-navigation/stack";

const SellStack = createStackNavigator();
export default function SellStackManager() {
  return (
    <SellStack.Navigator>
      <SellStack.Screen name="Sell" component={Sell} />
    </SellStack.Navigator>
  );
}
