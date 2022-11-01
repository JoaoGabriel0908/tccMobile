import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import COLORS from "../const/Colors";

const fundo = "../assets/fundo.png";

const PerfilHemo = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.containerImagem}>
        <ImageBackground style={estilos.imagem} source={require(fundo)} />
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: COLORS.cinza,
  },
  containerImagem: {
    flex: 1,
  },
  imagem: {
    width: 300,
    height: 20,
  },
});

export default PerfilHemo;
