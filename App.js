import React from "react";
import { View } from "react-native";
import cardImage from "./app/assets/jacket.jpg";
import { AppText } from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { Icon } from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import { AccountScreen } from "./app/screens/AccountScreen";
import { ListingScreen } from "./app/screens/ListingScreen";

export default function App() {
  return <ListingScreen />;
}
