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
import React, { useState, useEffect } from "react";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "./Input";
import Select from "./Select";
import { Picker } from "@react-native-picker/picker";
import CardAgends from "./CardAgends";
import apiBlood from "../service/apiBlood";

const DadosPerfil = ({
  nomeCompleto,
  iconName,
  nameGenres,
  clinicasSeguidas,
  email,
  celular,
  cidadesEscolhidas = []
}) => {

  return (
    <ScrollView style={estilos.container}>
      <View style={estilos.cidadeContainer}>
        <Text style={estilos.text}>Cidade residente</Text>
        <Input inputPequeno editable={false} placeholder="Cidade"
        />
      </View>
      <View style={estilos.nascimentoContainer}>
        <Text style={estilos.text}>Data nascimento</Text>
        <Input inputPequeno editable={false} placeholder="__/__/__"/>
      </View>
      <View>
        <View>
          <Text style={estilos.text} textPequeno>Email</Text>
          <Input inputPequeno editable={false}>{email}</Input>
        </View>
        <View>
          <Text style={estilos.text}>Celular</Text>
          <Input inputPequeno editable={false} placeholder='(00)12345-6789'>{celular}</Input>
        </View>
        <View>
          <Text style={estilos.text}>{clinicasSeguidas}</Text>
          <Icon name={iconName} />
        </View>
        <View style={estilos.local}>
          <Text style={{position: "absolute", bottom: 80}}>Locais de doação selecionados</Text>
          <View style={estilos.cidades}>
            <Input inputPequeno editable={false}>
              {cidadesEscolhidas}
            </Input>
          </View>
        </View>
        {/* <CardAgends /> */}
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: COLORS.branco,
    paddingTop: 10,
    paddingBottom: 100
  },
  primeiroContainer: {
    width: 360,
    flexDirection: "row",
    justifyContent: 'center',
  },
  nascimentoContainer: {
    flex: 1,
  },
  cidades: {
    width: 330,
  },
  id_estadoDoacao: {
    width: "30%",
    height: 50,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  cidadesEscolhidos: {
    width: 30,
    backgroundColor: COLORS.vermelhoClaro,
  },
  text:{
    alignContent: "center",
    // backgroundColor: COLORS.preto,
    textAlign: "center",
  },
  local: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default DadosPerfil;
