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

const HemoPaginaInicial = ({onPress = () => {}}) => {
 // const [hemocentro, setHemocentro] = useState({
 //   id: "",
 //   hemocentroNome: "",
 //   hemocentroEndereco: "",
 //   hemocentroFoto: "",
 // });

 //   useEffect(() => {
 //     apiLivraria.get(`/listarLivros/${cod_livro}`).then(livro => {
 //       setLivro(livro.data[0]);
 //     });
 //   }, []);

 return (
  <SafeAreaView style={estilos.container}>
   <View style={estilos.containerImagem}>
    <Image source={require(fundo)} style={estilos.imagem} />
   </View>
   <View style={estilos.containerDesc}>
    <Text style={estilos.hemoTitulo}>Hemocentro Campinas</Text>
    <Text>Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade Universitária, Campinas - SP, 13083-878</Text>
    <TouchableOpacity onPress={onPress}>
     <Text>Ver mais</Text>
    </TouchableOpacity>
   </View>
  </SafeAreaView>
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
