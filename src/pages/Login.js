import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import React, { useState, useEffect, useContext} from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useNavigation} from "@react-navigation/native";
import Input from "../components/Input";
import COLORS from "../const/Colors";
import CheckBox from "../components/CheckBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import InputIcon from "../components/InputIcon";
import apiBlood from "../service/apiBlood";
import { AuthContext } from "../contexts/Contexts";

const fundo = "../assets/fundo.png";

const Login = () => {
  
  const auth = useContext(AuthContext);
  const navigate = useNavigation();

  const [pessoa, setPessoa] = useState([]);
  
  const [errors, setErrors] = useState({
    cnpj: {
      error: false,
      errorMessage: false,
    },
    senha: {
      error: false,
      errorMessage: false,
    },
  });
  const handleOnSubmit = async () => {
    if (!inputs.cpf) {
      return setErrors({
        ...errors,
        cpf: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (!inputs.senha) {
      return setErrors({
        ...errors,
        senha: {
          error: true,
          errorMessage: "Preencha este campo.",
        },
      });
    }

    if (inputs.cpf && inputs.senha) {
      const isLogged = await auth.signin({
        cpf: inputs.cpf,
        senha: inputs.senha,
      });

      if (isLogged) {
        navigation.navigate("Menu");;
      }
    }
  };

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
    apiBlood.get("/listarDoador").then((inputs) => {
      console.log(inputs.inputs[0]);
      setPessoa(inputs.inputs);
    });
  }, []);

  useEffect(() => {
    apiBlood.get("/listarDoador").then((inputs) => {
      console.log(inputs.inputs[0]);
      setPessoa(inputs.inputs);
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
  
  const Logar = () => {
    try {
      const response = apiBlood.post("/loginUsuario", {
        cpf: inputs.cpf,
        senha: inputs.senha,
      });
      navigation.navigate("PaginaInicial");
    } catch (error) {
      error.response.inputs;
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
        <TouchableOpacity onPress={() => navigation.navigate("Menu", { id: pessoa.id })} style={estilos.button2}>
          <Text style={estilos.texto}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.Button01}>
        <Button
          key={pessoa.id}
          style={estilos.Button01}
          title="Entre"
          onPress={handleOnSubmit}
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
    left: 90,
    fontSize: 15,
  },
});

export default Login;
