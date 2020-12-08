import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Account from "./Account";
import { theme } from "../../Theme";

const AccountStack = createStackNavigator();

export default function AccountStackManager() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.mainBackgroundColor,
        },
      }}
    >
      <AccountStack.Screen name="Account" component={Account} />
    </AccountStack.Navigator>
  );
}
