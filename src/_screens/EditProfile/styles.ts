import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerEditName: {
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyColor1,
  },
  containerRowEditName: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  buttomDelete: {
    flex: 1,
    alignItems: "flex-end",
  },
  textName: {
    fontFamily: "biennale-regular",
    fontSize: 14,
    fontWeight: "400",
    color: colors.greyColor3,
    marginRight: 16,
  },
  input: {
    fontFamily: "biennale-regular",
    fontWeight: "500",
    color: colors.greyColor4,
    width: width / 1.5,
    height: height / 50,
  },
  textNameUser: {
    fontFamily: "biennale-regular",
    fontWeight: "600",
    color: colors.greyColor4,
  },
  containerImage: {
    alignItems: "center",
    marginTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyColor1,
  },
  textUpdateImage: {
    fontFamily: "biennale-regular",
    fontSize: 12,
    color: colors.primaryColor1,
    fontWeight: "500",
    marginTop: 8,
    marginBottom: 16,
    textDecorationLine: "underline",
  },
});

export default styles;
