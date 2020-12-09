import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Card } from "react-native-elements";

export default function InventoryItemPreview({ item }) {
  let itemImage = {
    uri: `https://react-store-node-api.herokuapp.com/inventoryItems/images/${item.itemId}`,
  };

  return (
    <View style={{}}>
      <Card>
        <Card.Title>{item.itemModel}</Card.Title>
        <Card.Image style={{ width: 300 }} source={itemImage} />
      </Card>
    </View>
  );
}
