import React from "react";
import { Image, View } from "react-native";
import styles from "../assets/styles";
import { AppText } from "./AppText";

const AppCard = ({ image, title, subTitle }) => (
  <View style={styles.card}>
    <Image style={styles.cardImage} source={image} />
    <View style={styles.cardSubTitle}>
      <AppText style={styles.cardTitleText}> {title} </AppText>
      <AppText style={styles.cardSubTitleText}> {subTitle} </AppText>
    </View>
  </View>
);

export default AppCard;
