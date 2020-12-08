import React from "react";
import { View, Text } from "react-native";

export default function Inventory({ route }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#3B82F6",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>{route.params.category}</Text>
    </View>
  );
}
