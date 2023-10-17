import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height/8,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.greyColor1,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 16,
    },
    containerImage: {
        marginRight: 16,
    },
    image: {
        width: 80,
        height: 80,
    },
    description: {
        fontFamily: "biennale-regular", 
        fontSize: 12,
        fontWeight: "400",
        color: colors.greyColor2,
        width: width/1.5,
        paddingHorizontal: 5,
        bottom: 7,
    },
    containerDescription: {
        justifyContent: "flex-start",
    },
})

export default styles;