import React, { useContext } from "react";

import { StatusBar, View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./routes";
import { fonts, fontsToImport } from "../../src/assets";
import { useFonts } from "@expo-google-fonts/poppins/useFonts";
import { AuthContext } from "../contexts/Contexts";
import Login from "../pages/Login";
import Menu from "./BottomTabs";

const AppNav = () => {
  const { isLoading, userToken, userId } = useContext(AuthContext);
  let [fontsLoaded] = useFonts(fontsToImport);

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>;
  }

  if (!fontsLoaded)
    return (
      <View>
        <Text>App is loading...</Text>
      </View>
    );

  return (
    <NavigationContainer>
      {userToken !== null ? (
        <>
          <StatusBar backgroundColor="#AA1E1E" barStyle="ligh-content" />
          <Routes />
        </>
      ) : (
        <>
          <StatusBar backgroundColor="#AA1E1E" barStyle="ligh-content" />
          <Menu />
        </>
      )}
    </NavigationContainer>
  );
};

export default AppNav;
