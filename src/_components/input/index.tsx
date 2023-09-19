import { View, Image, TextInput } from "react-native";
import { IInput } from "./types";
import styles from "./styles";
import React from "react";

const Input = (props: IInput) => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.row}>
        {props.iconPNG && <Image source={props.iconPNG} />}
        {props.iconSVG}
        <TextInput
          placeholder={props.placeholder}
          style={
            props.value
              ? [styles.input, props.style, styles.inputActive]
              : [styles.input, props.style]
          }
          secureTextEntry={props.secureTextEntry}
          value={props.value}
          onChangeText={props.onChangeText}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default Input;
