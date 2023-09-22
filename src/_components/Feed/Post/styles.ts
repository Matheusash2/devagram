import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 8
  },
  userName: {
    fontSize: 12,
    fontFamily: "biennale-bold",
    fontWeight: "600",
    lineHeight: 24,
    color: colors.greyColor4,
  },
  likedAndComment: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8
  },
  icon: {
    marginRight: 8,
  },
  likes: {
    fontSize: 10,
    fontFamily: "biennale-regular",
    fontWeight: "400",
    lineHeight: 20,
    color: colors.greyColor4,
  },
  likesBold: {
    fontFamily: "biennale-bold",
    fontWeight: "700",
  },
  containerDescription: {
    marginHorizontal: 16,
  },
  Description: {
    fontSize: 12,
    fontFamily: "biennale-regular",
    fontWeight: "400",
    lineHeight: 24,
    color: colors.greyColor4
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 100,
    marginRight: 8,
  },
  image: {
    height: height*0.5,
    width: width
  }
});

export default styles;
