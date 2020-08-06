import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { AppText } from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = (props) => (
  <View>
    <Image style={styles.image} source={require("../assets/jacket.jpg")} />
    <View style={styles.cardSubTitle}>
      <AppText style={styles.title}> Red jacket for sale </AppText>
      <AppText style={styles.price}> $100 </AppText>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/michaelz.jpeg")}
          title="Michaelz Omoakin"
          subTitle="5 Listings"
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  cardSubTitle: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
