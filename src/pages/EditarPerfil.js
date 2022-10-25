import {
    View,
    Image,
    TouchableOpacity,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    
  } from "react-native";
import React from 'react'
import Cabecalho from "../components/Cabecalho";
import InputIcon from '../components/InputIcon';
import Input from "../components/Input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import COLORS from '../const/Colors'
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
        <Text>Cidade residente</Text>
        <Input inputPequeno EditarPerfil/>
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
          <Text></Text>
          
        </View>
        <View style={estilos.cidadesEscolhidos}>
          <Text>Cidades que pretendem doar</Text>
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
    fontSize: 15,
  }

})

  
export default EditarPerfil
 