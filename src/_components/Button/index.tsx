import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { IButton } from "./types";
import Loading from "../Loading";

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
        <Loading isLoading={props.loading}/>
        {!props.loading && <Text style={styles.text}>{props.placeholder}</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
