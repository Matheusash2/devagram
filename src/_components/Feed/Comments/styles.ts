import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 8,
  },
  containerComments: {
    marginTop: 4,
  },
  userName: {
    fontSize: 12,
    fontFamily: "biennale-bold",
    fontWeight: "600",
    color: colors.greyColor4,
  },
  comments: {
    fontSize: 12,
    fontFamily: "biennale-regular",
    fontWeight: "400",
    color: colors.greyColor4,
  },
  containerCommentInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    padding: 0
  },
  textInput: {
    fontSize: 12,
    fontFamily: "biennale-regular",
    fontWeight: "400",
    color: colors.greyColor2,
  }
});

export default styles;
