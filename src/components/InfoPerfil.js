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

const person = "../assets/perfil-de-usuario.png";

const InfoPerfil = ({
  nameComplet,
  iconName,
  nameGenres,
  tipoSanguineo,
  iconNameSangue,
  onPress = () => {},
  gender = () => {},
}) => {
  return (
    <SafeAreaView style={estilos.containerGeral}>
      <SafeAreaView style={estilos.container}>
        <View style={estilos.perfil}>
          <Icon name={iconNameSangue} style={{ fontSize: 50, color: COLORS.branco }} />
          <Text style={{ fontSize: 14, fontFamily: 'Poppins_600SemiBold', color: COLORS.branco }}>
            {tipoSanguineo}
          </Text>
        </View>
        <View>
          
          <View style={estilos.pessoa}>
            <Image style={estilos.imagem} source={require(person)}/>
            <Text style={{ marginTop: 20, fontSize: 18, fontFamily: 'Poppins_600SemiBold', color: COLORS.branco }}>
              {nameComplet}
            </Text>
            
          </View>
        </View>
        <View style={estilos.genero}>
          <Icon name={gender} style={{ fontSize: 50, color: COLORS.branco }} />
          <Text style={{ fontSize: 14, fontFamily: 'Poppins_600SemiBold', color: COLORS.branco }}>{nameGenres}</Text>
        </View>
      </SafeAreaView>
      <View style={estilos.config}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="account-edit" style={{ height: 30, fontSize: 30 }} />
          <Text style={{ fontSize: 14, paddingRight: 20 }}>Editar perfil</Text>
        </TouchableOpacity>
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
    color: COLORS.branco
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
    flexDirection: "row",
    backgroundColor: COLORS.branco,
  },
});

export default InfoPerfil;
