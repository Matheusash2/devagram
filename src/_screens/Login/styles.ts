import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: height * 0.04,
  },
  containerWithAccount: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.04,
  },
  text: {
    color: colors.greyColor3,
    lineHeight: 21,
    fontSize: 14,
    fontFamily: "biennale-regular", 
  },
  textSignUp: {
    color: colors.primaryColor1,
    lineHeight: 21,
    fontSize: 14,
    textDecorationLine: "underline",
    fontFamily: "biennale-bold",
  }
});

export default styles;
