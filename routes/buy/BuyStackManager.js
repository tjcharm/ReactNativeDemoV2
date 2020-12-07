import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import InventoryManager from "./InventoryManager";

const BuyStack = createStackNavigator();

export default function BuyStackManager() {
  return (
    <BuyStack.Navigator>
      <BuyStack.Screen name="InventoryManager" component={InventoryManager} />
    </BuyStack.Navigator>
  );
}
