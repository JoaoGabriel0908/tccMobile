import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  LogBox,
} from "react-native";

import React, { useState, useEffect, useContext, useRef } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import COLORS from "../const/Colors";
import CheckBox from "../components/CheckBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import InputIcon from "../components/InputIcon";
import apiBlood from "../service/apiBlood";
import { AuthContext } from "../contexts/Contexts";
import Routes from "../routes/routes";

const fundo = "../assets/fundo.png";

const Login = () => {
  const navigation = useNavigation();
  const {userInfo, login, isLogin } = useContext(AuthContext);

  const [errors, setErrors] = React.useState([]);
  LogBox.ignoreAllLogs();

  // Função Handler que configura as mensagens de erros na state
  // Pegando as mensagens de erros e onde ocorreu (input)
  const handleErrors = (errorMessage, input) => {
    // Quando usamos um par de parenteses quer dizer que estamos dando um RETURN
    setErrors((prevState) => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };

  const [inputs, setInputs] = React.useState({
    // O useState sempre representa essa estrutura
    // Chave = inputs / valor = inputs
    cpf: "",
    senha: "",
  });

  console.log(inputs);

  // console.log(pessoa)

  const handleOnChange = (text, input) => {
    //O setInputs invoca o id_estado e passa para o prevState
    setInputs((prevState) =>
      // console.log(prevState)
      // console.log(input + ` ` + text)

      // Injeção de dados na State
      // Sobrepondo resultado do texto e colocando no prevState
      ({ ...prevState, [input]: text })
    );
  };

  const secureText = (password) => {
    const regexUppercase = RegExp(/ˆ(?=.*[A-Z]).+$/);
    const regexLowercase = RegExp(/ˆ(?=.*[a-z]).+$/);
    const regexNumber = RegExp(/ˆ(?=.*[0-9]).+$/);
    const length = password.length >= 6;

    setValidadeInput({
      case: regexUppercase.test(password) && regexLowercase.test(password),
      number: regexNumber.test(password),
      length,
    });
  };
  // 35789045773
  // Função de validação
  const validate = async () => {
    let validate = true;

    if (!inputs.cpf) {
      validate = false;
      handleErrors("Informe o seu CPF corretamente", "cpf");
    }
    if (!inputs.senha) {
      validate = false;
      handleErrors("Informe sua senha", "senha");
      // console.log('Capa em branco')
    }
    if (validate) {
      // console.log(inputs);
      // Envia os dados para a API cadastrar.
      login(inputs.cpf, inputs.senha );
      // {await userInfo !== null ? navigation.navigate("Menu") : console.log('erro')}
      // {isLogin === true ? : console.log('error')};
      navigation.navigate("Menu")
    }
  };

  const Logar = async () => {
    try {
      const response = apiBlood.post("/loginUsuario", {
        cpf: inputs.cpf,
        senha: inputs.senha,
      });
    } catch (error) {
      error.response.inputs;
      alert("CPF ou senha inválidos!");
      console.log("error", error);
    }
  };

  const optionsindividual = [{ text: "Lembrar-me", id: 1 }];

  return (
    <Layout>
      <Text style={estilos.Text}>Entrar</Text>
      <View style={estilos.Text}>
        <Text style={estilos.title}></Text>
        <Input
          key={"cpf"}
          keyboardType={"numeric"}
          placeholder=" CPF"
          type="cpf"
          maxLength={11}
          onChangeText={(text) => handleOnChange(text, "cpf")}
          values={inputs.cpf}
          onFocus={() => {
            handleErrors(null, "cpf");
          }}
          error={errors.cpf}
        />
      </View>
      <Text style={estilos.title}></Text>
      <InputIcon
        key={"senha"}
        placeholder="Senha"
        iconName="eye"
        onChangeText={(text) => handleOnChange(text, "senha")}
        values={inputs.senha}
        onFocus={() => {
          handleErrors(null, "senha");
        }}
        error={errors.senha}
      />

      <View>
        <CheckBox
          options={optionsindividual}
          onChange={(op) => alert(op)}
          key="checkbox"
        />
        <TouchableOpacity
          style={estilos.button2}
        >
          <Text style={estilos.texto}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.Button01}>
        <Button
          style={estilos.Button01}
          title="Entre"
          onPress={() => {
            validate()
          }}
        />
      </View>

      <Text style={estilos.Texto}>Novo por aqui? </Text>
      <TouchableOpacity
        style={estilos.buttonRegister}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={estilos.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </Layout>
  );
};

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
    left: 100,
    top: -160,
  },

  buttonText: {
    display: "flex",
    justifyContent: "center",
    color: COLORS.vermelhoPrincipal,
    fontSize: 15,
    fontWeight: "bold",
    top: -195,
    left: 45,
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
    color: COLORS.vermelhoPrincipal,
    marginBottom: 100,
    left: 220,
  },

  texto: {
    color: COLORS.vermelhoPrincipal,
    fontWeight: "bold",
    top: -120,
  },
  Texto: {
    top: -175,
    left: 80,
    fontSize: 15,
  },
  inputMask: {
    width: 334,
    height: 55,
    backgroundColor: COLORS.branco,
    flexDirection: "row",
    borderWidth: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
    left: 25,
  },
});

export default Login;
