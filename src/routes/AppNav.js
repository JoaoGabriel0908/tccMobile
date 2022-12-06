import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import COLORS from "../const/Colors";
import { AuthContext } from "../contexts/Contexts";
import Configuracao from "../pages/Configuracao";
import Login from "../pages/Login";
import TelaAgendamento from "../pages/TelaAgendamento";
import Menu from "./BottomTabs";
import Routes from "./routes";
import { useNavigation } from "@react-navigation/native";

const AppNav = () => {
  // const navigation = useNavigation();

  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.vermelhoClaro} />
      <Routes />
    </NavigationContainer>
  );
};

export default AppNav;
