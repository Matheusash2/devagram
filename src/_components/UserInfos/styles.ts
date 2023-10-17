import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginTop: 16,
  },
  containerInfoProfile: {
    flexDirection: "row",
    marginHorizontal: 24,
    justifyContent: "space-evenly",
  },
  containerInfo: {
    alignItems: "center",
    marginHorizontal: 5
  },
  textCount: {
    fontFamily: "biennale-bold",
    fontSize: 14,
    color: colors.greyColor4,
  },
  textInfo: {
    fontFamily: "biennale-regular",
    fontSize: 12,
    color: colors.greyColor4,
  },
  containerButton: {
    alignItems: "center",
    marginTop: 16,
  },
  outlineButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whiteColor,
    borderColor: colors.primaryColor1,
    borderWidth: 1,
    borderRadius: 4,
    width: 216,
    height: 28,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryColor1,
    borderRadius: 4,
    width: 216,
    height: 28,
  },
  textButtonOutline: {
    fontFamily: "biennale-regular",
    fontSize: 12,
    color: colors.primaryColor1,
  },
  textButton: {
    fontFamily: "biennale-regular",
    fontSize: 12,
    color: colors.whiteColor,
  },
});

export default styles;