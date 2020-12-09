import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import InventoryItemPreview from "./InventoryItemPreview";

export default function Inventory({ route, navigation }) {
  const [isLoading, setisLoading] = useState(true);
  const [inventoryItems, setinventoryItems] = useState();
  // fetches all inventory items from the react-store database
  let getInventoryItemsFromApi = () => {
    fetch(
      `https://react-store-node-api.herokuapp.com/inventoryItems/items/${route.params.category}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // sets the data from database to inventory items
        setinventoryItems(data);
        setisLoading(false);
      });
  };
  useEffect(() => {
    getInventoryItemsFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.category]);

  // inventory items to be displayed.
  let items = [];
  // checks if data was recieved from the database.
  if (
    inventoryItems != null &&
    inventoryItems !== undefined &&
    inventoryItems.length > 0
  ) {
    inventoryItems.map((item) => {
      return items.push(
        //   adjusts width of each element here
        <InventoryItemPreview
          navigation={navigation}
          key={item._id}
          item={item}
        />
      );
    });
  } else {
    return (
      <View>
        <Text>nothing here yet</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#3B82F6",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollView>{items}</ScrollView>
    </View>
  );
}
