import {
 View,
 Image,
 TouchableOpacity,
 Text,
 SafeAreaView,
 StyleSheet,
 ScrollView,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../const/Colors";
import { Card } from "react-native-paper";

const fundo = "../assets/fundo.png";

const HemoPaginaInicial = ({onPress = () => {}, hemoNome, cep, cidade, estado, logradouro, bairro, numero}) => {

 return (
  <TouchableOpacity onPress={onPress} style={estilos.container}>
   <View style={estilos.containerImagem}>
    <Image source={require(fundo)} style={estilos.imagem} />
   </View>
   <View style={estilos.containerDesc}>
    <Text style={estilos.hemoTitulo}>{hemoNome}</Text>
    <Text>{logradouro} {numero} - {bairro}, {cidade} - {estado}, {cep}</Text>
   </View>
  </TouchableOpacity>
 );
};

const estilos = StyleSheet.create({
 containerImagem: {
  width: 120,
  height: 120,
  borderRadius: 10,
 },
 container: {
  flexDirection: "row",
  marginVertical: 25,
 },
 containerDesc: {
  maxWidth: 200,
  paddingLeft: 10,
  textAlign: "center",
  fontSize: 14,
 },
 hemoTitulo:{
  fontWeight: "bold",
  fontSize: 16
 },
 imagem: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.cinza,
    borderRadius: 6,
 }
});

export default HemoPaginaInicial;
