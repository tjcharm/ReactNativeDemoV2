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
    <ScrollView
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
          minHeight: "90%",
          margin: 4,
        }}
        wrapperStyle={{
          alignItems: "center",
        }}
      >
        <Card.Title
          style={{
            textAlign: "center",
            fontSize: 30,
            color: theme.mainBackgroundColor,
          }}
        >
          {item.itemYearCreated} {item.itemMake} {item.itemModel}
        </Card.Title>
        <Card.FeaturedSubtitle
          style={{
            textAlign: "center",
            fontSize: 30,
            color: theme.mainBackgroundColor,
          }}
        >
          ${item.itemPrice}
        </Card.FeaturedSubtitle>
        <Card.Image style={{ height: 200, width: 350 }} source={itemImage} />
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          Year, Make, model
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: theme.mainBackgroundColor,
          }}
        >
          {item.itemYearCreated} {item.itemMake} {item.itemModel}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          Seller Price
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: theme.mainBackgroundColor,
          }}
        >
          ${item.itemPrice}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          Seller Description
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: theme.mainBackgroundColor,
          }}
        >
          {item.itemDescription}
        </Text>

        <Button
          type="solid"
          title="Contact Seller"
          buttonStyle={{
            width: 350,
            height: 60,
          }}
          onPress={() => {
            alert(
              "Sorry, you can't contact the seller right now. We are working on fixing this issue."
            );
          }}
        />
      </Card>
    </ScrollView>
  );
}
