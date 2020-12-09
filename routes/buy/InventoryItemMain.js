import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Button, Card } from "react-native-elements";
import { theme } from "../../AppConfig/Theme";
export default function InventoryItemMain({ route }) {
  let item = route.params.item;

  let itemImage = {
    uri: `https://react-store-node-api.herokuapp.com/inventoryItems/images/${item.itemId}`,
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: theme.mainBackgroundColor,
      }}
    >
      <Card
        containerStyle={{
          backgroundColor: "#333",
          borderRadius: 8,
          borderColor: "#333",
          height: "90%",
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
        <Button
          type="solid"
          title="Leave a Comment"
          onPress={() => {
            alert("no...");
          }}
        />
      </Card>
    </View>
  );
}
