import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import { IButton } from "./types";
import { colors } from "../../../app.json";

const Button = (props: IButton) => {
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}
        style={
          props.disabled
            ? [styles.button, props.style, styles.buttonDisabled]
            : [styles.button, props.style]
        }
      >
        {props.loading ? (
          <ActivityIndicator size={30} color={colors.greyColor2} />
        ) : (
          <Text style={styles.text}>{props.placeholder}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
