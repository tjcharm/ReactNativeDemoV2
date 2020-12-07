import React from "react";
import { View, Text } from "react-native";

export default function Account() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#333",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Account.js</Text>
    </View>
  );
}
