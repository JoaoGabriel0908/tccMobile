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
import InputIcon from "../components/InputIcon";
import COLORS from "../const/Colors";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

const person = "../assets/Ellipse8.png";

const EditarPerfil = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={estilos.pessoa}>
        <Image source={require(person)} style={estilos.imagem} />
        <Text
          style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}
        ></Text>
      </View>
      <View style={estilos.dadosPerfilContainer}></View>

      <View style={estilos.config}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditarPerfil");
          }}
          style={{
            justifyContent: "center",
            
            alignItems: "center",
            borderRadius:15
          }}
        >
          <Text style={estilos.Text}>Alterar foto de Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.cidadeContainer}>
        <Text style={estilos.title}>Nome completo</Text>
        <TextInput style={estilos.input} />
      </View>
      <View style={estilos.nascimentoContainer}>
        <Text style={estilos.title}>Genero</Text>
        <View>
          <Picker style={estilos.picker}
            placeholder="Sexo"
            // onFocus={() => {
            //   handleErrors(null, "sexo");
            // }}
            selectedValue={""}
            onValueChange={(itemValue) => handleChangeInputs("sexo", itemValue)}
          >
            <Picker.Item label="Masculino" value="mas" />
            <Picker.Item label="Feminino" value="fem" />
            <Picker.Item label="Outro" value="out" />
          </Picker>
        </View>

      
      </View>
      <View>
        <View>
          <Text style={estilos.title}>Tipo sanguíneo</Text>
          <View style={estilos.pickerborda}>
          <Picker style={estilos.picker}
            placeholder="Tipo sanguíneo"
            // onFocus={() => {
            //   handleErrors(null, "sexo");
            // }}
            selectedValue={""}
            onValueChange={(itemValue) => handleChangeInputs("sexo", itemValue)}
          >
            <Picker.Item label="A+" value="java" />
            <Picker.Item label="A-" value="js" />
          </Picker>
        </View>
          
        </View>
        <View>
          <Text style={estilos.title}>Data nascimento</Text>
          <TextInput style={estilos.input} />
        
        </View>
        <View>
          <Text></Text>
        </View>
        <View style={estilos.cidadesEscolhidos}>
          <Text style={estilos.subtitle}>Localização</Text>
          <View style={estilos.cidades}></View>
        </View>
       
       
        <View style={estilos.cidadeContainer}>
        <Text style={estilos.title}>Cidade Residente</Text>
        <TextInput style={estilos.inputCidRes} />
      </View>
      <View style={estilos.cidadeContainer}>
        <Text style={estilos.titleEstado}>Estado</Text>
        <TextInput style={estilos.inputEstado} />
      </View>
      <View style={estilos.cidadeContainer}>
        <Text style={estilos.titleCidades}>Cidades que pretende doar </Text>
        <TextInput style={estilos.inputCidade} />

        <Text style={estilos.subtitle}>Dados de contato</Text>
        <Text style={estilos.title}>Celular</Text>
        <TextInput style={estilos.input} />

        <Text style={estilos.title}>Email</Text>
        <TextInput style={estilos.input} /> 
        <View style={estilos.btn}>
        <Button style={estilos.Button} title="Desativar Conta" onPress={""} />
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  dadosPerfilContainer: {
    backgroundColor: COLORS.preto,
  },
  pessoa: {
    alignItems: "center",
    top: 30,
  },
  Text: {
    fontSize: 15,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: COLORS.preto,
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontWeight: "regular",
    left: 50,
    marginBottom: 10,
    fontSize: 15,
  },
  input: {
    width: 370,
    height: 55,
    backgroundColor: COLORS.cinza,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    left: 35,
  },
  subtitle: {
    fontWeight: "bold",
    left: 50,
    fontSize: 25,
  },
  icon: {
    color: COLORS.vermelhoPrincipal,
    opacity: 0.5,
    fontSize: 15,
    left: 40,
    top: 50,
  },
  picker:{
    width: 370,
    height: 55,
    backgroundColor: COLORS.cinza,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    left: 35,
   },
   inputCidRes:{
    width: 220,
    height: 55,
    backgroundColor: COLORS.cinza,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    left: 35,
   },

   inputEstado:{
    width: 130,
    height: 55,
    backgroundColor: COLORS.cinza,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    left: 270,
    top:-85
  },
  titleEstado:{
    fontWeight: "regular",
    left: 50,
    marginBottom: 10,
    fontSize: 15,
    left: 290,
    top:-85
  },
  titleCidades:{
    fontWeight: "regular",
    left: 50,
    marginBottom: 10,
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    top:-60
  },
  inputCidade:{
    width: 370,
    height: 150,
    backgroundColor: COLORS.cinza,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    left:35,
    top:-50
  },
  pickerborda:{
    borderRadius:15
  },
  btn:{
    alignItems: "center",
    justifyContent: "center"
  }
  
});

export default EditarPerfil;
