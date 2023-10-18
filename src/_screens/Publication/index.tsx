import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TextInput, View, Image, TouchableOpacity, Alert } from "react-native";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import Container from "../../_components/Container";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as FeedService from "../../_services/FeedService";
import CameraIcon from "../../_assets/images/camera.svg";
import styles from "./styles";
import Loading from "../../_components/Loading";

const Publication = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Publication"
  >;
  const navigation = useNavigation<navigationTypes>();
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    pickImage();
  }, []);
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

  const send = async () => {
    if (image || description) {
      try {
        setIsLoading(true);
        const body = new FormData();
        if (image) {
          const file: any = {
            uri: image,
            name: image.split("/").pop(),
            type: `image/${image.split("/").pop().split(".").pop()}`,
          };
          body.append("file", file);
        }
        if (description) {
          body.append("descricao", description);
        }
        await FeedService.sendPost(body);
        setIsLoading(false);
        navigation.navigate("Home");
      } catch (error: any) {
        setIsLoading(false);
        Alert.alert("Erro", "Erro ao enviar postagem");
      }
    }
  };

  return (
    <Container
      isLoading={isLoading}
      footerProps={{ currentTab: "Publication" }}
      headerProps={{
        headerPublication: {
          submit: send,
          submitEnable: image && description,
        },
      }}
    >
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => pickImage()}
            style={styles.containerImage}
          >
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <CameraIcon />
            )}
          </TouchableOpacity>
          <View style={styles.containerDescription}>
            <TextInput
              placeholder="Escreva uma legenda..."
              multiline={true}
              onChangeText={(value) => setDescription(value)}
              value={description}
              autoCapitalize="none"
              style={styles.description}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Publication;
