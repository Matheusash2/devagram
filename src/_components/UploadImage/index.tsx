import { Image, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import Avatar from "../../_assets/images/avatar_Camera.svg";
import { IUploadImage } from "./types";

const UploadImage = (props: IUploadImage) => {

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      props.setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={pickImage} style={styles.containerAvatar}>
        {props.image ? (
          <Image style={styles.avatarInput} source={{ uri: props.image }} />
        ) : (
          <Avatar />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default UploadImage;
