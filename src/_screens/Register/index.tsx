import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import styles from "./styles";
import communStyles from "../../communStyles";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import UserIcon from "../../_assets/images/user.svg";
import EmailIcon from "../../_assets/images/email.svg";
import KeyIcon from "../../_assets/images/key.svg";
import UploadImage from "../../_components/UploadImage";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirm,
} from "../../_utils/validations";

const Register = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Register"
  >;
  const navigation = useNavigation<navigationTypes>();
  const [erro, setErro] = useState<string>("");
  const [image, setImage] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const formIsValid = () => {
    const nameIsValid = validateName(name);
    const emailIsValid = validateEmail(email);
    const PasswordIsValid = validatePassword(password);
    const PasswordConfirmIsValid = validatePasswordConfirm(
      password,
      passwordConfirm
    );
    setErro("");
    if (!nameIsValid && name != "") {
      setErro("Nome Inválido");
    } else if (!emailIsValid && email != "") {
      setErro("E-mail Inválido");
    } else if (!PasswordIsValid && password != "") {
      setErro("Senha Inválida");
    } else if (!PasswordConfirmIsValid && passwordConfirm != "") {
      setErro("Confirmação de Senha Inválida");
    } else {
      setErro("");
    }
  };

  useEffect(() => {
    formIsValid();
  }, [name, email, password, passwordConfirm]);

  return (
    <View style={styles.containerRegister}>
      <UploadImage image={image} setImage={setImage} />
      {erro != "" && <Text style={communStyles.textError}>{erro}</Text>}
      <Input
        iconSVG={<UserIcon />}
        onChangeText={(e: string) => setName(e)}
        placeholder={"Nome Completo"}
        value={name}
      />
      <Input
        iconSVG={<EmailIcon />}
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"E-mail"}
        value={email}
      />
      <Input
        iconSVG={<KeyIcon />}
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Senha"}
        value={password}
        secureTextEntry={true}
      />
      <Input
        iconSVG={<KeyIcon />}
        onChangeText={(e: string) => setPasswordConfirm(e)}
        placeholder={"Confirmar Senha"}
        value={passwordConfirm}
        secureTextEntry={true}
      />
      <Button
        placeholder="Cadastrar"
        onPress={() => {}}
        loading={false}
        disabled={
          erro != "" ||
          name == "" ||
          email == "" ||
          password == "" ||
          passwordConfirm == ""
        }
      />
      <View style={styles.containerWithOutAccount}>
        <Text style={styles.text}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textSignIn}>Faça seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
