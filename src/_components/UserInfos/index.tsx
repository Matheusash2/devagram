import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import Avatar from "../Avatar";
import { IUser, IUserData } from "../../_services/UserService/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import * as UserService from "../../_services/UserService";
import { useState } from "react";

const UserInfos = (props: { profile: IUserData; userLogged: IUser }) => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Profile"
  >;
  const navigation = useNavigation<navigationTypes>();
  const [followers, setFollowers] = useState<number>(props.profile.followers);
  const [followThisUser, setFollowThisUser] = useState<boolean>(
    props.profile.followThisUser
  );

  const toggleFollow = async () => {
    try {
      if (followThisUser) {
        setFollowers(followers - 1);
      } else {
        setFollowers(followers + 1);
      }
      await UserService.toggleFollow(props.profile.id);
      setFollowThisUser(!followThisUser);
    } catch (error: any) {
      Alert.alert("Erro", "Erro ao efetuar operação");
    }
  };
  return (
    <View style={styles.container}>
      <Avatar user={props.profile} withLinearGradient={true} />
      <View>
        <View style={styles.containerInfoProfile}>
          <View style={styles.containerInfo}>
            <Text style={styles.textCount}>{props.profile.posts}</Text>
            <Text style={styles.textInfo}>Publicações</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.textCount}>{followers}</Text>
            <Text style={styles.textInfo}>Seguidores</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.textCount}>{props.profile.following}</Text>
            <Text style={styles.textInfo}>Seguindo</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          {props.profile.id == props.userLogged.id ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile", props.profile)}
              style={styles.outlineButton}
            >
              <Text style={styles.textButtonOutline}>Editar Usuário</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => toggleFollow()}
              style={followThisUser ? styles.outlineButton : styles.button}
            >
              <Text
                style={
                  followThisUser ? styles.textButtonOutline : styles.textButton
                }
              >
                {followThisUser ? "Deixar de Seguir" : "Seguir"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
export default UserInfos;
