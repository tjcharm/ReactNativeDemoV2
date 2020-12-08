import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { categories } from "../../AppConfig/Categories";

export default function InventoryManager({ navigation }) {
  const [currentCategory, setCurrentCategory] = useState("cars");
  const [displayedCategories, setDisplayedCategories] = useState();

  const handleOnPress = async (selectedCategory) => {
    await setCurrentCategory(selectedCategory);
    // alert(selectedCategory);
  };

  let categoriesFromCategoriesJs = [];
  useEffect(() => {
    categories.map((cat) => {
      categoriesFromCategoriesJs.push(
        <Button
          key={cat}
          onPress={() => {
            navigation.navigate("Inventory", {
              category: cat,
            });
          }}
          title={cat}
          color="white"
          type="solid"
          buttonStyle={{
            backgroundColor: "#333",
            margin: 5,
            width: 300,
            height: 80,
          }}
        />
      );
    });
    setDisplayedCategories(categoriesFromCategoriesJs);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#3B82F6",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, margin: 20 }}>Buy</Text>
      {displayedCategories}
    </View>
  );
}
