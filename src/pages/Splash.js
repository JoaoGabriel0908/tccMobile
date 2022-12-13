import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  LogBox,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../const/Colors";

const fundo = "../assets/fundo.png";

const Splash = () => {
  const navigation = useNavigation();

  LogBox.ignoreAllLogs()

  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <Text style={estilos.text}>Bem-vindo</Text>
        <View style={estilos.botoes}>
        <Button
          register
          title="Cadastro"
          onPress={() => {
            navigation.navigate("Cadastro");
          }}
        />
        <Button
          textBack
          login
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
      </ImageBackground>
      
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    top: 350,
    color: "#fff",
    fontSize:24,
    fontFamily: 'Poppins_700Bold',
  },
  imagemFundo: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  botoes: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: "row",
    height: "10%",
    position: "absolute",
    bottom: 10,
    flex: 1,
  },
});

export default Splash;
