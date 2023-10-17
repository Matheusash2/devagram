import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    headerContainer:{
        height: height*0.06,
        backgroundColor: colors.whiteColor,
        borderBottomColor: colors.greyColor1,
        borderBottomWidth: 1,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
        paddingVertical: 10,
    },
    icon:{
        marginLeft: 5,

    },
    containerInputSearch:{
        flexDirection: "row",
        width: width / 1.8,
        height: height * 0.04,
        backgroundColor: colors.primaryColor3,
        alignItems: "center",
        borderRadius: 4,
        marginLeft: 16,
    },
    input: {
        width: width / 2.1,
        paddingHorizontal: 8,
        fontFamily: "biennale-regular",
        color: colors.greyColor2,
    },
    inputActive: {
        width: width / 2.1,
        paddingHorizontal: 8,
        fontFamily: "biennale-regular",
        color: colors.primaryColor1,
    },
    containerProfile: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    textName: {
        fontFamily: "biennale-bold",
        fontSize: 16,
        letterSpacing: 0.16,
        color: colors.greyColor4
    },
    iconLeft: {
        left: 12,
        position: "absolute"
    },
    textLeft: {
        fontFamily: "biennale-regular",
        fontSize: 12, 
        letterSpacing: 0.12,
        color: colors.greyColor3,
        fontWeight: "500"
    },
    textRight: {
        fontFamily: "biennale-bold",
        fontSize: 12, 
        letterSpacing: 0.12,
        color: colors.primaryColor1,
    },
    textRightDisabled: {
        fontFamily: "biennale-bold",
        fontSize: 12, 
        letterSpacing: 0.12,
        color: colors.greyColor1,
    },
    iconRight: {
        right: 12,
        position: "absolute"
    }
})

export default styles;