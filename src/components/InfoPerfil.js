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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const fundo = "../assets/fundo.png";

const InfoPerfil = ({
 nameComplet,
 iconName,
 nameGenres,
 tipoSanguineo,
 iconNameSangue,
 gender,
}) => {
 return (
  <SafeAreaView style={estilos.container}>
   <View>
    <Icon name="cog" />
   </View>
   <View style={estilos.perfil}>
    <Icon name={iconNameSangue} />
    <Text>{tipoSanguineo}</Text>
   </View>
   <View>
    <View>
     <Image source={require(fundo)} style={estilos.imagem} />
     <Text>{nameComplet}</Text>
    </View>
    <Image />
   </View>
   <View>
    <Icon name={gender} />
    <Text>{nameGenres}</Text>
   </View>
  </SafeAreaView>
 );
};

const estilos = StyleSheet.create({
 container: {
  backgroundColor: COLORS.vermelhoPrincipal,
  height: 250,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
 },
 perfil: {
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
 },
 imagem: {
  borderRadius: 100,
  width: 150,
  height: 150,
 },
});

export default InfoPerfil;
