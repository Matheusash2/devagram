import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerInput: {
    marginTop: height * 0.03,
    width: width / 1.3,
    height: height / 25,
    borderBottomColor: colors.primaryColor1,
    borderBottomWidth: 1,
  },
  input: {
    width: width / 1.4,
    paddingHorizontal: 12,
    fontFamily: "biennale-regular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.14,
    color: colors.greyColor2,
  },
  inputActive: {
    color: colors.primaryColor1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textErrorInput: {
    color: colors.erroColor,
    fontFamily: "biennale-regular",
    lineHeight: 21,
    fontSize: 14,
    fontWeight: "400",
    marginBottom: height * 0.02,
  },
});

export default styles;
