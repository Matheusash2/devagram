import { View, Text, TextInput } from "react-native";
import LogoHeaderIcon from "../../../_assets/images/logo_Header.svg";
import SearchIcon from "../../../_assets/images/search.svg";
import { IHeader } from "./types";
import styles from "./styles";
import { colors } from "../../../../app.json";

const Header = (props: IHeader) => {
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
    </View>
  );
};

export default Header;
