import React from "react";

import { StatusBar, View, Text } from "react-native";
import showBottomTabs from "./src/routes/BottomTabs";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import { fonts, fontsToImport } from "../src/assets";
import { useFonts } from "@expo-google-fonts/poppins/useFonts";

const AppNav = () => {
  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded)
    return (
      <View>
        <Text>App is loading...</Text>
      </View>
    );

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#AA1E1E" barStyle="ligh-content" />
      <Routes />
    </NavigationContainer>
  );
};

export default AppNav;
