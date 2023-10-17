import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import Container from "../../_components/Container";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../../_components/Avatar";
import ClearIcon from "../../_assets/images/clearInput.svg";
import { useState } from "react";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import * as UserService from "../../_services/UserService";

const EditProfile = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Profile"
  >;
  const navigation = useNavigation<navigationTypes>();
  const profile = navigation
    .getState()
    .routes.find((route) => route.name == "EditProfile")?.params;
  const [name, setName] = useState<string>("");
  const [hasName, setHasName] = useState<boolean>(false);
  const [image, setImage] = useState<any>();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const editProfile = async () => {
    if (image || name) {
      try {
        const body = new FormData();
        if (image) {
          const file: any = {
            uri: image,
            name: image.split("/").pop(),
            type: `image/${image.split("/").pop().split(".").pop()}`,
          };
          body.append("file", file);
        }
        if (name) {
          body.append("nome", name);
        }
        await UserService.update(body);
        navigation.goBack();
      } catch (error: any) {
        Alert.alert("Erro", "Erro ao alterar dados do perfil");
      }
    }
  };

  return (
    <Container
      headerProps={{
        editProfileHeader: { submit: editProfile, submitEnable: image || name },
      }}
      footerProps={{ currentTab: "Profile" }}
    >
      <View>
        {profile && (
          <View>
            <View style={styles.containerImage}>
              <Avatar user={profile} withLinearGradient={true} image={image}/>
              <TouchableOpacity onPress={() => pickImage()}>
                <Text style={styles.textUpdateImage}>
                  Alterar foto do perfil
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.containerEditName}>
                <View style={styles.containerRowEditName}>
                  <Text style={styles.textName}>Nome</Text>
                  {!hasName ? (
                    <Text style={styles.textNameUser}>{profile.name}</Text>
                  ) : (
                    <TextInput
                      placeholder="Digite um nome"
                      style={styles.input}
                      value={name}
                      onChangeText={(n) => setName(n)}
                      autoCapitalize="none"
                    />
                  )}
                  <TouchableOpacity
                    style={styles.buttomDelete}
                    onPress={() => setHasName(!hasName)}
                  >
                    <ClearIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </Container>
  );
};

export default EditProfile;
