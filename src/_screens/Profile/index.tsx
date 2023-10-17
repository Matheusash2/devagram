import { Alert, Text } from "react-native";
import { View } from "react-native";
import Container from "../../_components/Container";
import Feed from "../../_components/Feed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import * as UserService from "../../_services/UserService";
import { useEffect, useState } from "react";
import { IUser, IUserData } from "../../_services/UserService/types";
import UserInfos from "../../_components/UserInfos";

const Profile = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Profile"
  >;
  const navigation = useNavigation<navigationTypes>();
  const profileParams = navigation
    .getState()
    .routes.find((route) => route.name == "Profile")?.params;
  const [userLogged, setUserLogged] = useState<IUser>();
  const [profile, setProfile] = useState<IUserData>();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const user = await UserService.getCurrentUser();
      setUserLogged(user);
      var profile;
      if (profileParams && profileParams.id) {
        profile = await UserService.getProfile(profileParams.id);
      } else if (user && user.id) {
        profile = await UserService.getProfile(user.id);
      }
      if (profile) {
        const profileFormatted: IUserData = {
          id: profile.data._id,
          name: profile.data.nome,
          avatar: profile.data.avatar,
          email: profile.data.email,
          posts: profile.data.publicacoes,
          followers: profile.data.seguidores,
          following: profile.data.seguindo,
          followThisUser: profile.data.segueEsseUsuario != undefined ? profile.data.segueEsseUsuario : false,
        };
        setProfile(profileFormatted);
      }
    } catch (error: any) {
      Alert.alert("Erro", "Erro ao carregar os dados do perfil");
      console.log("Erro", error);
    }
  };
  return (
    <Container
      headerProps={{
        profileHeader: {
          userName: profile?.name || "",
          isExternalProfile: userLogged?.id == profile?.id ? false : true,
        },
      }}
      footerProps={{
        currentTab: userLogged?.id == profile?.id ? "Profile" : "Home",
      }}
    >
      <View>
        {profile && userLogged &&
          <UserInfos profile={profile} userLogged={userLogged}/>
        }
        <Feed isProfileFeed={true} profile={profile} />
      </View>
    </Container>
  );
};

export default Profile;
