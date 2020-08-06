import React from "react";
import {ImageBackground, StyleSheet, View, Text, Image, Platform} from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import styles from "../assets/styles";

const WelcomeScreen = (props) => {
  return (
    /* All our elements will be contained inside this image background container so elements can be ontop of it */
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
      blurRadius={Platform.OS === "ios" ? 10 : 2}
    >
      {/* We create a view to house both our logo and the text below it so we can center both rightly */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" color={colors.primary} />
        <AppButton title="Register" color={colors.secondary} />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
