import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.white}
        />
      </View>
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
    position: "absolute",
    top: 40,
    left: 30, //ds position the element 30px from the left
  },
  deleteIcon: {
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
