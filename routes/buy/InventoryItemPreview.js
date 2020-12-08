import React from "react";
import { View, Text } from "react-native";

export default function InventoryItemPreview({ category }) {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text>{category.itemModel}</Text>
    </View>
  );
}
