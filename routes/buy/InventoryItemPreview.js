import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button, Card } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { theme } from "../../AppConfig/Theme";
export default function InventoryItemPreview({ item, navigation }) {
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
          borderRadius: 8,
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
            color: theme.mainBackgroundColor,
          }}
        >
          ${item.itemPrice} - {item.itemYearCreated} {item.itemMake}{" "}
          {item.itemModel}
        </Card.Title>

        <Card.Image style={{ height: 200, width: 350 }} source={itemImage} />
      </Card>
    </TouchableOpacity>
  );
}
