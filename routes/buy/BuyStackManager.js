import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { theme } from "../../AppConfig/Theme";
import InventoryManager from "./InventoryManager";
import Inventory from "./Inventory";

const BuyStack = createStackNavigator();

export default function BuyStackManager() {
  return (
    <BuyStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.mainBackgroundColor,
        },
      }}
      initialRouteName="InventoryManager"
    >
      <BuyStack.Screen name="InventoryManager" component={InventoryManager} />
      <BuyStack.Screen name="Inventory" component={Inventory} />
    </BuyStack.Navigator>
  );
}
