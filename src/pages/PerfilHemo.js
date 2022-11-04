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
import Button from "../components/Button";

const fundo = "../assets/fundo.png";
const hemocentroImagem = "../assets/Ellipse8.png";

const PerfilHemo = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.containerImagem}>
        <ImageBackground style={estilos.imagem} source={require(fundo)} />
        <View style={estilos.buttonImage}>
          <Button title="Agendar" />
        </View>
        <ImageBackground
          style={estilos.imageHemocentro}
          source={require(hemocentroImagem)}
        />
      </View>
      <View style={estilos.content}>
        <View style={estilos.containerNomeHemocentro}>
          <Text style={estilos.nomeHemocentro}>
            Fundação hemocentro de Brasília
          </Text>
          <Text style={estilos.endereco}>
            Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade
            Universitária, Campinas - SP, 13083-878
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImagem: {
    height: 250,
  },
  imagem: {
    height: "100%",
    position: "relative",
  },
  buttonImage: {
    position: "absolute",
    width: 200,
    left: 20,
  },
  imageHemocentro: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: COLORS.cinza,
    left: 20,
    position: "absolute",
    top: 210,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  containerNomeHemocentro: {
    alignItems: "center",
    width: 360,
  },
  nomeHemocentro: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 17,
    textAlign: 'center',
  },
  endereco: {
    fontSize: 16,
    textAlign: 'center',
  }
});

export default PerfilHemo;
