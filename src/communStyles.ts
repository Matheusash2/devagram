import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../app.json";

const { height, width } = Dimensions.get("screen");

const communStyles = StyleSheet.create({
  textError: {
    color: colors.erroColor,
    fontFamily: "biennale-regular",
    lineHeight: 21,
    fontSize: 14,
    fontWeight: "400",
    marginBottom: height * 0.02,
  },
});

export default communStyles;
