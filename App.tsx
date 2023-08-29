import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import styles from "./src/communStyles";
import Button from "./src/_components/Button";
import Input from "./src/_components/input";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [email, setEmail] = useState("");
  const [fontsLoaded] = useFonts({
    "biennale-regular": require("./assets/fonts/Biennale-Regular.otf"),
    "biennale-bold": require("./assets/fonts/Biennale-Bold.otf"),
    "biennale-light": require("./assets/fonts/Biennale-Light.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Button
        placeholder="Teste de botão"
        onPress={() => {}}
        loading={false}
        disabled={false}
      />
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite seu email"}
        value={email}
      />
    </View>
  );
}
