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

const HemoPaginaInicial = ({onPress = () => {}, hemoNome, cep, cidade, estado, logradouro, bairro, numero, imagem}) => {

 return (
  <TouchableOpacity onPress={onPress} style={estilos.container}>
   <View style={estilos.containerImagem}>
    <Image source={{uri: imagem}} style={estilos.imagem} />
   </View>
   <View style={estilos.containerDesc}>
    <Text style={estilos.hemoTitulo}>{hemoNome}</Text>
    <Text style={{color: COLORS.preto, fontWeight: "500"}}>{logradouro} {numero} - {bairro}, {cidade} - {estado}, {cep}</Text>
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
  borderRadius: 15,
  backgroundColor: COLORS.vermelhoClaro,
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
    borderRadius: 15,
 }
});

export default HemoPaginaInicial;
