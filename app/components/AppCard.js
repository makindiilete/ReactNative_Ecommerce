import React from "react";
import { Image, View } from "react-native";
import styles from "../assets/styles";
import { AppText } from "./AppText";

const AppCard = (props) => (
  <View style={styles.card}>
    <Image style={styles.cardImage} source={props.image} />
    <View style={styles.cardSubTitle}>
    <AppText style={styles.cardTitleText}> {props.title} </AppText>
    <AppText style={styles.cardSubTitleText}> {props.subTitle} </AppText>
    </View>
  </View>
);

export default AppCard;
