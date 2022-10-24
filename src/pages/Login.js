import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, {useState}from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import COLORS from "../const/Colors";
import CheckBox from "../components/CheckBox";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputIcon from '../components/InputIcon'

const fundo = "../assets/fundo.png";

const Login = () => {
    const [validateInput, setValidadeInput]= useState({
      case: false,
      number:false,
      length:false
    })
     
    
    const secureText = (password) => {
       const regexUppercase = RegExp(/ˆ(?=.*[A-Z]).+$/)
       const regexLowercase = RegExp(/ˆ(?=.*[a-z]).+$/)
       const regexNumber = RegExp(/ˆ(?=.*[0-9]).+$/)
       const length = password.length >= 6 

       setValidadeInput({
         case: regexUppercase.test(password) && regexLowercase.test(password),
         number: regexNumber.test(password),
         length
       }) 
     }
  
  const optionsindividual = [{text:'Lembrar-me', id: 1}];
 
  const navigation = useNavigation();
  return(
    
    <Layout>
      <Text style={estilos.Text}>Entrar</Text>
      <View style={estilos.Text}>
        <Text style={estilos.title}></Text>
        <Input placeholder=" CPF" 
        type="cpf"
        onChangeText={(password) => {
            secureText(password)
        }}
        />
      </View>
      
      <Text style={estilos.title}></Text>
      <InputIcon source={validateInput.length}
      placeholder="Senha" 
      iconName="eye" 
      onChangeText={(password) => {
        secureText(password)
    }}
      >
        
      </InputIcon>

      <View>
        
        <CheckBox options={optionsindividual} onChange={op=> alert (op)} />
        <TouchableOpacity style={estilos.button2}>
          <Text style={estilos.texto}>Esqueceu a senha?</Text>
        </TouchableOpacity>

      </View>

      <View style={estilos.Button01}>
        <Button style={estilos.Button01}title="Entre" onPress={() => {navigation.navigate("Menu")}} />
      </View>

      <Text style={estilos.Texto}>Novo por aqui? </Text>
      <TouchableOpacity style={estilos.buttonRegister}>
        <Text style={estilos.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </Layout>
  );
}

const estilos = StyleSheet.create({
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  container: {
    flex: 1,
  },
  imagemFundo: {
    justifyContent: "flex-end",
    flex: 1,
  },
  containerForm: {
    backgroundColor: "#FFF",
    paddingBottom: 200,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 5,
    marginTop: 30,
  },
  Button01: {
    left:100,
    top:-160,
  },
  
  buttonText: {
    display: "flex",
    justifyContent: "center",
    color: COLORS.vermelhoPrincipal,
    fontSize: 15,
    fontWeight: "bold",
    top:-195,
    left:45
  },
  buttonRegister: {
    alignItems: "center",
  },
  registerText: {
    color: "#ffff",
  },
  Text: {
    textAlign: "center",
    justifyContent: "center",
    color: COLORS.vermelhoPrincipal,
    fontSize: 18,
    fontWeight: "bold",
    top: 20,
    marginBottom: 10,
  },
  button2: {
    color:COLORS.vermelhoPrincipal,
    marginBottom:100,
    left:220,
  },
  
  texto:{
    color:COLORS.vermelhoPrincipal,
    fontWeight: "bold",
    top:-120
  },
    eye:{
      
    },
    Texto:{
      top:-175,
      left:90,
      fontSize: 15,
   },
   CheckBox:{
     
   }
  
});

export default Login