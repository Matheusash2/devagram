import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    footerContainer:{
        backgroundColor: colors.primaryColor3,
        height: height*0.05,
        width: width,
    },
    row:{
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: height * 0.008,
    }
})

export default styles;