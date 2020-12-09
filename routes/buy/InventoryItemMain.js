import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Button, Card } from "react-native-elements";

export default function InventoryItemMain({ route }) {
  let item = route.params.item;

  let itemImage = {
    uri: `https://react-store-node-api.herokuapp.com/inventoryItems/images/${item.itemId}`,
  };
  return (
    <TouchableOpacity
      style={{ flex: 1, flexDirection: "column" }}
      onPress={() => {
        navigation.navigate("InventoryItemMain", {
          category: item.itemCategory,
          item: item,
        });
      }}
    >
      <Card
        containerStyle={{
          backgroundColor: "#333",
          borderRadius: "8%",
          borderColor: "#333",
        }}
        wrapperStyle={{
          alignItems: "center",
        }}
      >
        <Card.Title
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          {item.itemYearCreated} {item.itemMake} {item.itemModel}
        </Card.Title>
        <Card.FeaturedSubtitle
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          ${item.itemPrice}
        </Card.FeaturedSubtitle>
        <Card.Image style={{ width: 300 }} source={itemImage} />

        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "white",
          }}
        >
          {item.itemDescription}
        </Text>
        <Button type="solid" title="Leave a Comment" />
      </Card>
    </TouchableOpacity>
  );
}
