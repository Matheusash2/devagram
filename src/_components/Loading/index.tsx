import { ActivityIndicator, View } from "react-native";
import { colors } from "../../../app.json";
import { ILoading } from "./types";
import styles from "./styles";

const Loading = (props: ILoading) => {
  return (
    props.isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size={30} color={colors.primaryColor1} />
    </View>
  ) : null
)};

export default Loading;
