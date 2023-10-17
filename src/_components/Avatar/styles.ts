import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  avatarIcon: {
    height: 32,
    width: 32,
    borderRadius: 100,
    marginRight: 8,
    backgroundColor: colors.whiteColor
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  avatarGradient: {
    borderRadius: 100,
    height: 88,
    width: 88,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default styles;
