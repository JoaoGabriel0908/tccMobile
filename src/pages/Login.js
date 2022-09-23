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
import Button from "../components/Button";

import Input from "../components/Input";
import COLORS from "../const/Colors";

const fundo = "../assets/fundo.png";

export default function Login() {
  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <View style={estilos.containerForm}>
            <Text style={estilos.Text}>Entrar</Text>
            <View style={estilos.Text}>
                <Text style={estilos.title}></Text>
                <Input placeholder=" CPF" style={estilos.input} />
            </View>
                <Text style={estilos.title}></Text>
                <Input placeholder="Senha" style={estilos.input} />

                <Text style={estilos.Text}>Esqueceu a senha?</Text>
          <View style={estilos.button}>
          <Button title='Entre'/>
          </View>
          
          <Text style={estilos.Text}>Novo por aqui? </Text>
          
          <TouchableOpacity style={estilos.buttonRegister}>
            
            <Text style={estilos.buttonText}>Cadastre-se</Text>
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
    fontSize: 5,
    marginTop: 30,
  },
  button: {
    borderRadius:15,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: "center",
    color:"#ffff",
  },
  buttonText: {
    display:'flex',
    justifyContent:'center',
    color: COLORS.vermelhoPrincipal,
    fontSize: 18,
    fontWeight: "bold",
    
        
  },
  buttonRegister: {
    alignItems:'center',
    
  },
  registerText: {
    color: "#ffff",
    
  },
  Text:{
    textAlign:"center",
    justifyContent:"center",
    color: COLORS.vermelhoPrincipal,
    fontSize:18,
    fontWeight:'bold',
    top:20,
    marginBottom:10
    
    
  },
  buttonEntre:{
  
  }
});
