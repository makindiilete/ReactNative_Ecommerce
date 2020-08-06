import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { AppText } from "../components/AppText";
import colors from "../config/colors";

const ListingDetailsScreen = (props) => (
  <View>
    <Image style={styles.image} source={require("../assets/jacket.jpg")} />
    <View style={styles.cardSubTitle}>
      <AppText style={styles.title}> Red jacket for sale </AppText>
      <AppText style={styles.price}> $100 </AppText>
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
});
export default ListingDetailsScreen;
