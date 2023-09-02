import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerAvatar: {
    marginBottom: height / 35,
  },
  avatarInput: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
});

export default styles;
