import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import COLORS from "../const/Colors";

const logo = "../assets/cuidados-de-saude(3)1.png";

const Cabecalho = (props) => {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.textCabecalho}>{props.name}</Text>
      <Image source={require(logo)} style={estilos.logo}/>
    </View>
  );
};

const estilos = StyleSheet.create({
  cabecalho: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 360,
  },
  logo: {
    
  },
  textCabecalho: {
    left: 20,
    fontWeight: "bold",
    fontSize: 22,
    color: COLORS.vermelhoPrincipal,
    flex: 1,
    textAlign: "center",
  },
});

export default Cabecalho;
