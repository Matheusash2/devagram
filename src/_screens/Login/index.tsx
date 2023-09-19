import { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import * as UserService from "../../_services/UserService";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import styles from "./styles";
import communStyles from "../../communStyles";
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
  const [erro, setErro] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      await UserService.login({ login: email, senha: password });
      setLoading(false);
      navigation.navigate("Home");
    } catch (error: any) {
      console.log(error);
      setErro("Erro ao efetuar o login, tente novamente");
      setLoading(false);
    }
  };

  const verifyLogged = useCallback(async () => {
    const user = await UserService.getCurrentUser();
    if (user?.token) {
      navigation.navigate("Home");
    }
  }, []);

  useEffect(() => {
    verifyLogged();
  }, []);

  return (
    <View style={styles.containerLogin}>
      <Logo style={styles.logo} />
      {erro != "" && <Text style={communStyles.textError}>{erro}</Text>}
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
        onPress={() => onLogin()}
        loading={loading}
        disabled={!email || !password}
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
