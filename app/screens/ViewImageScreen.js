import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30, //ds position the element 30px from the left
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30, //ds position the element 30px from the right
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // ds ensures our image fits and its not cut off from any angle
  },
});
export default ViewImageScreen;
