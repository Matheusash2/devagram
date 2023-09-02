import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import styles from "./styles";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import Logo from "../../_assets/images/logo.svg";
import EmailIcon from "../../_assets/images/email.svg";
import KeyIcon from "../../_assets/images/key.svg";

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Login"
  >;
  const navigation = useNavigation<navigationTypes>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.containerLogin}>
      <Logo style={styles.logo} />
      <Input
        iconSVG={<EmailIcon />}
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite seu e-mail"}
        value={email}
      />
      <Input
        iconSVG={<KeyIcon />}
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Digite sua senha"}
        value={password}
        secureTextEntry={true}
      />
      <Button
        placeholder="Login"
        onPress={() => {}}
        loading={false}
        disabled={false}
      />
      <View style={styles.containerWithAccount}>
        <Text style={styles.text}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
