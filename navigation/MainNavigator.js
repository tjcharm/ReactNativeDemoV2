import React from "react";
import { View, Text, Button } from "react-native";

export default function MainNavigator({ navigation }) {
  return (
    <View>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Account"
        onPress={() => {
          navigation.navigate("Account");
        }}
      />
    </View>
  );
}
