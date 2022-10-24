import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "./Input";

const DadosPerfil = ({
  nameComplet,
  iconName,
  nameGenres,
  clinicasSeguidas,
}) => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.cidadeContainer}>
        <Text>Cidade residente</Text>
        <Input inputPequeno />
      </View>
      <View style={estilos.nascimentoContainer}>
        <Text>Data nascimento</Text>
        <Input inputPequeno />
      </View>
      <View>
        <View>
          <Text textPequeno>E-mail</Text>
          <Input inputPequeno />
        </View>
        <View>
          <Text>Celular</Text>
          <Input inputPequeno />
        </View>
        <View>
          <Text>{clinicasSeguidas}</Text>
          <Icon name={iconName} />
        </View>
        <View style={estilos.cidadesEscolhidos}>
          <Text>Cidades que pretendem doar</Text>
          <View style={estilos.cidades}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: COLORS.branco,
    paddingHorizontal: 40,
    paddingTop: 10,
  },
  primeiroContainer: {
    width: 360,
    flexDirection: "row",
  },
  cidadeContainer: {
    flex: 1,
  },
  nascimentoContainer: {
    flex: 1,
  },
  cidadesEscolhidos: {

  },
  cidades: {
    backgroundColor: COLORS.vermelhoClaro,
    height: 250,
  },
});

export default DadosPerfil;
