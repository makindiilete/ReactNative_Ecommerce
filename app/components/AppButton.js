import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import styles from "../assets/styles";
import colors from "../config/colors";

const AppButton = (props) => (
    <TouchableOpacity  style={[styles.buttonComponent, {backgroundColor: props.color ? props.color : colors.primary}]} onPress={props.onPressHandler}>
       <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
);

export default AppButton;
