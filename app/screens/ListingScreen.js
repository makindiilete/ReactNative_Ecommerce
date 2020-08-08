import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch In Great Condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];
export function ListingScreen(props) {
  const [,] = useState();
  useEffect(() => {}, []);
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
        keyExtractor={(listing) => listing.id.toString()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
