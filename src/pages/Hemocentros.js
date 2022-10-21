import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import Button from "../components/Button";
import InputIcon from "../components/InputIcon";

const Hemocentros = () => {
  return (
    <>
    <View>
      <Text style={estilos.textTitle}></Text>
      <InputIcon
          name="name"
          placeholder="Pesquise hemocentros perto de você"
          // value={inputs.nomeCompleto}
          iconName="account"
          // error={errors.nomeCompleto}
          onFocus={() => {
            handleErrors(null, "nomeCompleto");
          }}
          keyboardType="default"
          onChangeText={(text) => handleOnChange(text, "nomeCompleto")}
        />
       
    </View>
    <View style={estilos.botoes}>
        <Button 
            back
            textBack
            title="Ver Mais"
            onPress={() => {
              navigation.navigate("Splash");
            }}
          />
      </View>
    <View style={estilos.containerText}>

      
    </View>
    </>
    
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: COLORS.vermelhoPrincipal,
    fontWeight: "bold",
    fontSize: 25,
  },
  containerText: {
    borderColor: COLORS.preto,
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    width: 330,
    height:120,
    paddingHorizontal: 17,
    paddingTop: 28,
    borderWidth: 1,
    borderRadius: 20,
    left:50,
    top:-60
  },
  botoes: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    marginTop: 5,
    color: COLORS.vermelhoPrincipal,
    top:70,
    fontSize:10,
    left:30
  },
});




export default Hemocentros;

