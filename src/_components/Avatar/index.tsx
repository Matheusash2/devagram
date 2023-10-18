import { TouchableOpacity, Image } from "react-native";
import AvatarIcon from "../../_assets/images/avatar_Search.svg";
import AvatarImage from "../../_assets/images/avatar_Profile.svg";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { colors } from "../../../app.json";
import { IUser, IUserData } from "../../_services/UserService/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { IAvatar } from "./types";

const Avatar = (props: IAvatar) => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Profile"
  >;
  const navigation = useNavigation<navigationTypes>();
  return props.withLinearGradient ? (
    <LinearGradient
      colors={[colors.primaryColor1, colors.primaryColor2]}
      style={styles.avatarGradient}
    >
      {props.image ? (
        <Image source={{ uri: props.image }} style={styles.avatarImage} />
      ) : props.user.avatar ? (
        <Image source={{ uri: props.user.avatar }} style={styles.avatarImage} />
      ) : (
        <AvatarImage style={styles.avatarImage} />
      )}
    </LinearGradient>
  ) : (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Profile", props.user);
      }}
    >
      {props.user.avatar ? (
        <Image source={{ uri: props.user.avatar }} style={styles.avatarIcon} />
      ) : (
        <AvatarIcon style={styles.avatarIcon} />
      )}
    </TouchableOpacity>
  );
};

export default Avatar;
