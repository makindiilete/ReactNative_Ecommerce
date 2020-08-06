import React from "react";
import {Text} from "react-native";
import styles from "../assets/styles";

export const AppText = (props) => <Text style={[styles.text, props.style]}>{props.children}</Text>;

