import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { theme } from "../../AppConfig/Theme";
import InventoryManager from "./InventoryManager";
import Inventory from "./Inventory";
import InventoryItemMain from "./InventoryItemMain";

const BuyStack = createStackNavigator();

export default function BuyStackManager() {
  return (
    <BuyStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.mainBackgroundColor,
        },
        headerTintColor: "white",
      }}
      initialRouteName="InventoryManager"
    >
      <BuyStack.Screen
        name="InventoryManager"
        component={InventoryManager}
        options={{ title: "Buy from us" }}
      />
      <BuyStack.Screen
        name="Inventory"
        component={Inventory}
        options={({ route }) => ({
          title: route.params.category,
        })}
      />
      <BuyStack.Screen
        name="InventoryItemMain"
        component={InventoryItemMain}
        options={({ route }) => ({
          title: route.params.category,
        })}
      />
    </BuyStack.Navigator>
  );
}
