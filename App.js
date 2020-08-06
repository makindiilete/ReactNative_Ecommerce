import React from "react";
import { View } from "react-native";
import cardImage from "./app/assets/jacket.jpg";
import { AppText } from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    /* <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <AppCard
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>*/
    <ListingDetailsScreen />
  );
}
