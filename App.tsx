import { useFonts } from "expo-font";
import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import Routes from "./src/_routes";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
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
    
      <NavigationContainer onReady={onLayoutRootView}>
        <Routes />
      </NavigationContainer>
    
  );
}
