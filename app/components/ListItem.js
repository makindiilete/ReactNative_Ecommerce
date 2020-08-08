import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { AppText } from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { AntDesign } from "@expo/vector-icons";

const ListItem = ({
  renderRightActions,
  onPress,
  image,
  title,
  subTitle,
  IconComponent,
  swipeAble = false,
}) => (
  <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{title} </AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle} </AppText>}
        </View>
        <View
          style={{
            right: 20,
            alignSelf: "center",
            position: "absolute",
          }}
        >
          {swipeAble && (
            <AntDesign name="doubleright" size={12} color={colors.light} />
          )}
        </View>
      </View>
    </TouchableHighlight>
  </Swipeable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.ListColor,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
export default ListItem;
