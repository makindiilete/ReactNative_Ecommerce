import { Platform, StyleSheet } from "react-native";
import colors from "../config/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", //ds but our 2 views buttons to the bottom of the screen
    alignItems: "center", //since our main axis is portrait (default), ds center our logo to horizontal center which is the secondary axis
  },
  logoContainer: {
    position: "absolute", //in other not to make our logo appear at the base of the container like the views, we give it absolute positioning and 70px margin top to push it down
    top: 70,
    alignItems: "center", //inside the logo container, we also need to center all contents inside it horizontally
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    color: colors.black,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
  buttonComponent: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 15,
    width: "100%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardSubTitle: {
    padding: 20,
  },
  cardTitleText: {
    marginBottom: 7,
  },
  cardSubTitleText: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default styles;
