import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerButton: {
    marginTop: height / 20,
  },
  button: {
    width: width / 1.3,
    height: height / 15,
    backgroundColor: colors.primaryColor1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.whiteColor,
    fontFamily: "biennale-bold",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19.2,
  },
  buttonDisabled: {
    backgroundColor: colors.greyColor3,
  },
});

export default styles;
