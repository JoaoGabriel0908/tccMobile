import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import COLORS from "../const/Colors";
import CheckBox from "../components/CheckBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import InputIcon from "../components/InputIcon";
import apiBlood from "../service/apiBlood";

const fundo = "../assets/fundo.png";

const Login = () => {
  const [pessoa, setPessoa] = useState([]);

  const [validateInput, setValidadeInput] = useState({
    case: false,
    number: false,
    length: false,
  });

  const handleChangeInputs = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };
  const handleOnChange = (text, input) => {
    //O setInputs invoca o id_estado e passa para o prevState
    setInputs((prevState) =>
      // console.log(prevState),
      // console.log(input + ` ` + text)

      // Injeção de dados na State
      // Sobrepondo resultado do texto e colocando no prevState
      ({ ...prevState, [input]: text })
    );
  };

  const [inputs, setInputs] = React.useState({
    // O useState sempre representa essa estrutura
    // Chave = inputs / valor = inputs
    cpf: "",
    senha: "",
  });

  useEffect(() => {
    apiBlood.get("/listarDoador").then((data) => {
      console.log(data.data[0]);
      setPessoa(data.data);
    });
  }, []);
  

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
   // Função de validação
   const validate = () => {
    let validate = true;

    if (!inputs.cpf) {
      validate = false;
      handleErrors("Informe o seu CPF corretamente", "cpf");
    // } else if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(inputs.cpf)) {
    //   validate = false;
    //   handleErrors("CPF inválido", "cpf");
    } else if (validarCPF(inputs.cpf)) {
      validate = false;
      handleErrors("CPF inválido", "cpf");
    }
    if (!inputs.senha) {
      validate = false;
      handleErrors("Cadastre sua senha", "senha");
      // console.log('Capa em branco')
    }
    if (!inputs.confirmacaoSenha) {
      validate = false;
      handleErrors("Informa sua senha novamente", "confirmacaoSenha");
      // console.log('Capa em branco')
    }

    if (validate) {
      console.log(inputs);
      // Envia os dados para a API cadastrar.
      Login();
      //console.log("Cadastrou");
    }

    console.log(errors);
  };
  const Logar = () => {
    try {
      const response = apiBlood.post("/listarDoador", {
        cpf: inputs.cpf,
        senha: inputs.senha,
      });
      navigation.navigate('Terms')
    } catch (error) {
      error.response.data
    }
  };

  const optionsindividual = [{ text: "Lembrar-me", id: 1 }];

  const navigation = useNavigation();
  return (
    <Layout>
      <Text style={estilos.Text}>Entrar</Text>
      <View style={estilos.Text}>
        <Text style={estilos.title}></Text>
        <Input
          placeholder=" CPF"
          type="cpf"
          onChangeText={(password) => {
            secureText(password);
          }}
        />
      </View>

      <Text style={estilos.title}></Text>
      <InputIcon
        source={validateInput.length}
        placeholder="Senha"
        iconName="eye"
        onChangeText={(password) => {
          secureText(password);
        }}
      ></InputIcon>

      <View>
        <CheckBox options={optionsindividual} onChange={(op) => alert(op)} />
        <TouchableOpacity style={estilos.button2}>
          <Text style={estilos.texto}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.Button01}>
        {pessoa.map(pessoa => (
          
      
        <Button
          key={pessoa.id} 
          style={estilos.Button01}
          title="Entre"
          onPress={() => {
            navigation.navigate("Menu", { id: pessoa.id });
          }}
        />
        ))}
      </View>

      <Text style={estilos.Texto}>Novo por aqui? </Text>
        <TouchableOpacity style={estilos.buttonRegister} onPress={() => navigation.navigate('Cadastro')}>
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
  eye: {},
  Texto: {
    top: -175,
    left: 90,
    fontSize: 15,
  },
  CheckBox: {},
});

export default Login;
