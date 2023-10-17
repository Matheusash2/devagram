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
    marginLeft: 12,
    marginBottom: 8,
  },
  userName: {
    fontSize: 12,
    fontFamily: "biennale-bold",
    fontWeight: "600",
    color: colors.greyColor4,
    paddingRight: 4,
  },
  likedAndComment: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  likes: {
    fontSize: 10,
    fontFamily: "biennale-regular",
    fontWeight: "400",
    color: colors.greyColor4,
  },
  likesBold: {
    fontFamily: "biennale-bold",
    fontWeight: "700",
  },
  containerDescription: {
    marginHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    fontSize: 12,
    fontFamily: "biennale-regular",
    fontWeight: "400",
    color: colors.greyColor4,
  },
  btnAction: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: 0,
    maxHeight: 12,
  },
  btnDescription: {
    color: colors.primaryColor2,
    fontFamily: "biennale-bold",
    fontSize: 12,
    fontWeight: "500",
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 100,
    marginRight: 8,
  },
  image: {
    height: height * 0.5,
    width: width,
  },
});

export default styles;
