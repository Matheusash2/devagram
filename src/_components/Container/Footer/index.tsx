import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import HomeIcon from "../../../_assets/images/home_Active.svg";
import HomeGreyIcon from "../../../_assets/images/home_Grey.svg";
import PostIcon from "../../../_assets/images/post_Active.svg";
import PostGreyIcon from "../../../_assets/images/post_Grey.svg";
import UserIcon from "../../../_assets/images/user_Active.svg";
import UserGreyIcon from "../../../_assets/images/user_Grey.svg";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../../_routes/RootStackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IFooter } from "./types";

const Footer = (props: IFooter) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamsList, "Home">;
  const navigation = useNavigation<navigationTypes>();
  const menu = [
    {
      title: "Home",
      onPress: () => {
        navigation.navigate("Home");
      },
      icon: <HomeGreyIcon />,
      iconActivated: <HomeIcon />,
    },
    {
      title: "NewPublication",
      onPress: () => {
        navigation.navigate("NewPublication");
      },
      icon: <PostGreyIcon />,
      iconActivated: <PostIcon />,
    },
    {
      title: "Profile",
      onPress: () => {
        navigation.navigate("Profile");
      },
      icon: <UserGreyIcon />,
      iconActivated: <UserIcon />,
    },
  ];
  return (
    <View style={styles.footerContainer}>
      <View style={styles.row}>
        {menu.map((botao, index) => (
          <TouchableOpacity onPress={botao.onPress} key={index}>
            {props.currentTab === botao.title
              ? botao.iconActivated
              : botao.icon}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Footer;
