import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Layout from "../components/Layout";

import Input from "../components/Input";

const fundo = "../assets/fundo.png";

export default function Login() {
  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <View style={estilos.containerForm}>
            <Text style={estilos.Text}>Entrar</Text>
            <View style={estilos.Text}>
                <Text style={estilos.title}>CPF</Text>
                <Input placeholder="Digite seu CPF..." style={estilos.input} />
            </View>
                <Text style={estilos.title}>Senha</Text>
                <Input placeholder="Sua senha" style={estilos.input} />

          <TouchableOpacity style={estilos.button}>
            <Text style={estilos.buttonText}>Entre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.buttonRegister}>
            <Text style={estilos.buttonText}>Novo por aqui? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  container: {
    flex: 1,
  },
  imagemFundo: {
    justifyContent: "flex-end",
    flex: 1,
  },
  containerForm: {
    backgroundColor: "#FFF",
    paddingBottom: 200,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  button: {
    backgroundColor: "#AA1E1E",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },
  Text:{
      marginBottom:30,
      alignItems:'center'

  },
  buttonText:{
    color: "#a1a1a1",

  }
});
