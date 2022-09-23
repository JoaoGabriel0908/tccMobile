import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../const/Colors";

const fundo = "../assets/fundo.png";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <Text style={estilos.text}>Bem-vindo</Text>
        <View style={estilos.botoes}>
        <Button
          title="Cadastro"
          onPress={() => {
            navigation.navigate("Cadastro");
          }}
        />
        <Button
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
    top: 300,
    color: "#fff",
  },
  imagemFundo: {
    width: "100%",
    height: "100%",
  },
  botoes:{
    flexDirection:'row',
    top:570
  }
});

export default Splash;
