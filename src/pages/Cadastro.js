import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";

import React, { useState } from "react";
import COLORS from "../const/Colors";
import Input from "../const/Input";
import Layout from "../const/Layout";

const fundo = "../assets/fundo.png";

const Cadastro = () => {
  const [text, setText] = useState("Nome Completo");

  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <View style={estilos.containerForm}>
          <View>
            <Text style={estilos.text}>Cadastro</Text>
          </View>
          <View style={estilos.viewForm}>
            <Input label="Nome Completo" />
            <Input label="E-Mail" />
            <Input label="Cidades que pretende doar" />
            <Input label="CPF" />
            <Input label="Senha" />
            <Input label="Confirmação de senha" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewForm: {
    flex:1,
  },
  text: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: COLORS.vermelhoPrincipal,
  },
  imagemFundo: {
    justifyContent: "flex-end",
    flex: 3,
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    maxHeight: "90%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
});

export default Cadastro;
