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
import Input from "../components/Input";
import Layout from "../components/Layout";

const fundo = "../assets/fundo.png";

const Cadastro = () => {
  const [text, setText] = useState("Nome Completo");

  return (
    <Layout>
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
        </Layout>
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
