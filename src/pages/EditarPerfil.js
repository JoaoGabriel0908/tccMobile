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

import Cabecalho from "../components/Cabecalho";
import InputIcon from '../components/InputIcon';
import COLORS from "../const/Colors";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";




const person = "../assets/Ellipse8.png";


const EditarPerfil = () => {
  return (
    
    

    <ScrollView>
      <View style={estilos.pessoa}>
            <Image source={require(person)} style={estilos.imagem} />
            <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>

            </Text>
          </View>
      <View style={estilos.dadosPerfilContainer}>
        </View>

        <View style={estilos.config}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditarPerfil");
          }}
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          
          <Text style={estilos.Text}>Alterar foto de Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.cidadeContainer}>
        <Text style={estilos.title}>Nome completo</Text>
        <TextInput style={estilos.input}/>
      </View>
      <View style={estilos.nascimentoContainer}>

      <Text style={estilos.title}>Genero</Text>
      <View>
      <Picker
              placeholder="Sexo"
              onFocus={() => {
                handleErrors(null, "sexo");
              }}
              selectedValue={inputs.sexo}
              onValueChange={(itemValue) =>
                handleChangeInputs("sexo", itemValue)
              }
            >
              {sexo.map((sexo) => {
                return <Picker.Item label={sexo.sexo} value={sexo.Id} />;
              })}
            </Picker>
      </View>
      
      <TextInput style={estilos.input}/>
      </View>
      <View>
        <View>
       
        <Text style={estilos.title}>Tipo sanguíneo</Text>
        
        <TextInput style={estilos.input}/>
        </View>
        <View>
        <Text style={estilos.title}>Data nascimento</Text>
            <TextInput style={estilos.input}/>
        </View>
        <View>
          <Text></Text>
          
        </View>
        <View style={estilos.cidadesEscolhidos}>
        <Text style={estilos.subtitle}>Localização</Text>
          <View style={estilos.cidades}></View>
        </View>
      </View>
    </ScrollView>
  )
}
  
const estilos = StyleSheet.create({
  dadosPerfilContainer: {
    backgroundColor: COLORS.preto,
  },
  pessoa:{
    alignItems: "center",
    top:30 
  },
  Text:{
    fontSize:15,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: COLORS.preto,
    fontWeight: "bold",
    fontSize: 18,
  },
title:{
  fontWeight: "regular",
  left:50,
  marginBottom:10,
  fontSize: 15,
},
input:{
  width: 334,
  height: 55,
  backgroundColor: COLORS.cinza,
  flexDirection: "row",
  paddingHorizontal: 15,
  alignItems: "center",
  borderRadius: 15,
  justifyContent: "center",
  left:35
},
subtitle:{
  fontWeight: "bold",
  left:50,
  fontSize: 25,
},
icon: {
  color: COLORS.vermelhoPrincipal,
  opacity: 0.5,
  fontSize: 15,
  left:40,
  top:50
},
})

  
export default EditarPerfil
 