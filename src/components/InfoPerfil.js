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

const person = "../assets/Ellipse8.png";

const InfoPerfil = ({
  nameComplet,
  iconName,
  nameGenres,
  tipoSanguineo,
  iconNameSangue,
  gender,
}) => {
  return (
    <SafeAreaView style={estilos.containerGeral}>
      <SafeAreaView style={estilos.container}>
        <View style={estilos.perfil}>
          <Icon name={iconNameSangue} style={{fontSize: 50}}/>
          <Text style={{fontSize: 14, fontWeight: "800"}}>{tipoSanguineo}</Text>
        </View>
        <View>
          <View style={estilos.pessoa}>
            <Image source={require(person)} style={estilos.imagem} />
            <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold", }}>{nameComplet}</Text>
          </View>
          <Image />
        </View>
        <View style={estilos.genero}>
          <Icon name={gender} style={{fontSize: 50}}/>
          <Text style={{fontSize: 14, fontWeight: "800"}}>{nameGenres}</Text>
        </View>
      </SafeAreaView>
      <View style={estilos.config}>
        <Icon name="account-edit" style={{ height: 30, fontSize: 30 }} />
        <Text style={{ fontSize: 14, paddingRight:20 }}>Editar perfil</Text>
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  containerGeral: {
    justifyContent: "center",
  },
  container: {
    backgroundColor: COLORS.vermelhoClaro2,
    height: 230,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pessoa: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  perfil: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imagem: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  genero: {
    alignItems: "center",
    flex: 1,
  },
  config: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 40,
    flexDirection: "row",
    backgroundColor: COLORS.branco,
  },
});

export default InfoPerfil;
