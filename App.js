import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Button } from "react-native";
import Home from "./routes/home/Home";
import Account from "./routes/account/Account";
import MainNavigator from "./navigation/MainNavigator";
import HomeStackManager from "./routes/home/HomeStackManager";
import AccountStackManager from "./routes/account/AccountStackManager";
import BuyStackManager from "./routes/buy/BuyStackManager";
import SellStackManager from "./routes/sell/SellStackManager";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: "#333",
          style: {
            backgroundColor: "#3B82F6",
          },
          labelStyle: { color: "white", marginBottom: 15, fontSize: 15 },
        }}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={HomeStackManager} />
        <Tab.Screen name="Buy" component={BuyStackManager} />
        <Tab.Screen name="Sell" component={SellStackManager} />
        <Tab.Screen name="Account" component={AccountStackManager} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3B82F6",
  },
});
