import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  SafeAreaView,
  Image
} from "react-native";

import React, { useState } from "react";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Button from "../components/Button";

const passo1 = '../assets/Group8.png';

const Cadastro = () => {
  const [text, setText] = useState("Nome Completo");

  return (
    <Layout>
      <View>
        <Text style={estilos.textTitle}>Cadastro</Text>
      </View>
      <View style={estilos.viewForm}>
        <Input placeholder="Nome Completo" iconName='account'/>
        <Input placeholder="E-Mail" iconName='email'/>
        <Input placeholder="Cidades que pretende doar"/>
        <Input placeholder="CPF" iconName='card-account-details'/>
        <Input placeholder="Senha" iconName='lock'/>
        <Input placeholder="Confirmação de senha" iconName='lock-off'/>
        <View style={estilos.botoes}>
          <Button title="Avançar"/>
          <Button title="Voltar"/>
        </View>
        <Image source={require(passo1)}/>
      </View>
    </Layout>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewForm: {
    flex: 1,
  },
  textTitle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: COLORS.vermelhoPrincipal,
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Inter-ExtraBold'
  },
  imagemFundo: {
    justifyContent: "flex-end",
    flex: 3,
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  botoes:{
    flexDirection: 'row'
  },
});

export default Cadastro;
