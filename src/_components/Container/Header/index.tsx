import { View, Text, TextInput } from "react-native";
import LogoHeaderIcon from "../../../_assets/images/logo_Header.svg";
import SearchIcon from "../../../_assets/images/search.svg";
import { IHeader } from "./types";
import styles from "./styles";
import { colors } from "../../../../app.json";
import { TouchableOpacity } from "react-native";
import ArrowLeftIcon from "../../../_assets/images/arrowLeft.svg";
import LogoutIcon from "../../../_assets/images/logout.svg";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = (props: IHeader) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamsList, "Home">;
  const navigation = useNavigation<navigationTypes>();
  const logout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.headerContainer}>
      {props.default && (
        <View style={styles.row}>
          <View>
            <LogoHeaderIcon />
          </View>
          <View
            style={
              props?.searchBar?.value.length == 0
                ? styles.containerInputSearch
                : [
                    styles.containerInputSearch,
                    { borderColor: colors.primaryColor1, borderWidth: 1 },
                  ]
            }
          >
            <SearchIcon style={styles.icon} />
            <TextInput
              placeholder="Pesquisar"
              style={
                props?.searchBar?.value.length == 0
                  ? styles.input
                  : styles.inputActive
              }
              value={props.searchBar?.value}
              onChangeText={props.searchBar?.onChange}
              autoCapitalize={"none"}
            />
          </View>
        </View>
      )}
      {props.profileHeader && (
        <View style={styles.containerProfile}>
          {props.profileHeader.isExternalProfile && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconLeft}
            >
              <ArrowLeftIcon />
            </TouchableOpacity>
          )}
          <Text style={styles.textName}>{props.profileHeader.userName}</Text>
          {!props.profileHeader.isExternalProfile && (
            <TouchableOpacity onPress={() => logout()} style={styles.iconRight}>
              <LogoutIcon />
            </TouchableOpacity>
          )}
        </View>
      )}
      {props.editProfileHeader && (
        <View style={styles.containerProfile}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconLeft}
          >
            <Text style={styles.textLeft}>Cancelar</Text>
          </TouchableOpacity>
          <Text style={styles.textName}>Editar Perfil</Text>
          <TouchableOpacity
            onPress={() =>
              props.editProfileHeader?.submitEnable &&
              props.editProfileHeader?.submit()
            }
            style={styles.iconRight}
          >
            <Text
              style={
                props.editProfileHeader.submitEnable
                  ? styles.textRight
                  : styles.textRightDisabled
              }
            >
              Concluir
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {props.headerPublication && (
        <View style={styles.containerProfile}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconLeft}
        >
          <Text style={styles.textLeft}>Cancelar</Text>
        </TouchableOpacity>
        <Text style={styles.textName}>Nova Publicação</Text>
        <TouchableOpacity
          onPress={() =>
            props.headerPublication?.submitEnable &&
            props.headerPublication?.submit()
          }
          style={styles.iconRight}
        >
          <Text
            style={
              props.headerPublication.submitEnable
                ? styles.textRight
                : styles.textRightDisabled
            }
          >
            Compartilhar
          </Text>
        </TouchableOpacity>
      </View>
      )}
    </View>
  );
};

export default Header;
