import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Card } from "react-native-elements";

export default function InventoryItemPreview({ item }) {
  let itemImage = {
    uri: `https://react-store-node-api.herokuapp.com/inventoryItems/images/${item.itemId}`,
    width: 20,
    height: 20,
  };

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Card>
        <Card.Title>{item.itemModel}</Card.Title>
        <Card.Image source={itemImage} />
      </Card>
    </View>
  );
}
