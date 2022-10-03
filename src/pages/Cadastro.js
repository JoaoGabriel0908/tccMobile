import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";

import React, { useState } from "react";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Select from "../components/Select";
import { Picker } from "@react-native-picker/picker";

const passo1 = "../assets/Group8.png";

const Cadastro = () => {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [inputs, setInputs] = React.useState({
    // O useState sempre representa essa estrutura
    // Chave = inputs / valor = inputs
    nomeCompleto: "",
    email: "",
    cpf: "",
    senha: "",
    confirmacaoSenha: "",
  });

  // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA
  // STATE NO MÉTODO OnChangeText
  const handleOnChange = (text, input) => {
    //O setInputs invoca o estado e passa para o prevState
    setInputs(
      (prevState) => (
        console.log(prevState),
        // console.log(input + ` ` + text)

        // Injeção de dados na State
        // Sobrepondo resultado do texto e colocando no prevState
        { ...prevState, [input]: text }
      )
    );
  };
  // ******************** Validação dos dados de cadastro ********************

  // State de erro de preenchimento
  const [errors, setErrors] = React.useState([]);

  // Função Handler que configura as mensagens de erros na state
  // Pegando as mensagens de erros e onde ocorreu (input)
  const handleErrors = (errorMessage, input) => {
    // Quando usamos um par de parenteses quer dizer que estamos dando um RETURN
    setErrors((prevState) => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };

  // Função de validação
  const validate = () => {
    let validate = true;

    // Quando máo tem conteúdo o validate ficará falso e aparecerá a mensagem
    if (!inputs.nomeCompleto) {
      validate = false;
      handleErrors("Informe o nome completo", "nomeCompleto");
      // console.log('Título em branco')
    }
    if (!inputs.email) {
      validate = false;
      handleErrors("Informe o seu e-mail", "email");
      // console.log('Descrição em branco')
    }
    if (!inputs.cpf) {
      validate = false;
      handleErrors("Informe o seu CPF", "cpf");
      // console.log('Capa em branco')
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
      // Envia os dados para a API cadastrar.
      cadastrar();
    }

    console.log(errors);
  };

  // Função que cria o cadastro com o post
  const cadastrar = () => {
    try {
      console.log("Cadastrou");
      navigation.navigate("Terms")
    } catch (error) {}
  };

  return (
    <Layout>
      <View>
        <Text style={estilos.textTitle}>Cadastro</Text>
      </View>
      <View style={estilos.viewForm}>
        <Input
          placeholder="Nome Completo"
          type="cel-phone"
          iconName="account"
          error={errors.nomeCompleto}
          onFocus={() => {
            handleErrors(null, "nomeCompleto");
          }}
          onChangeText={(text) => handleOnChange(text, "nomeCompleto")}
        />
        <Input
          placeholder="E-Mail"
          type="cpf"
          iconName="email"
          error={errors.email}
          onFocus={() => {
            handleErrors(null, "email");
          }}
          onChangeText={(text) => handleOnChange(text, "email")}
        />

        <View style={estilos.selectContainer}>
          <Text style={estilos.label}></Text>
          <View style={estilos.formContainer}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Cidade que pretende doar" value="" />
              <Picker.Item label="Barueri" value="Barueri" />
              <Picker.Item label="Itapevi" value="Itapevi" />
              <Picker.Item label="Carapicuiba" value="Carapicuiba" />
              <Picker.Item label="Osasco" value="Osasco" />
              <Picker.Item label="Itapeva" value="Itapeva" />
            </Picker>
          </View>
        </View>

        <Input
          placeholder="CPF"
          type="cpf"
          iconName="card-account-details"
          error={errors.cpf}
          onFocus={() => {
            handleErrors(null, "cpf");
          }}
          onChangeText={(text) => handleOnChange(text, "cpf")}
        />
        <Input
          placeholder="Senha"
          type="cpf"
          iconName="lock"
          error={errors.senha}
          onFocus={() => {
            handleErrors(null, "senha");
          }}
          onChangeText={(text) => handleOnChange(text, "senha")}
        />
        <Input
          placeholder="Confirmação de senha"
          type="cpf"
          iconName="lock-off"
          error={errors.confirmacaoSenha}
          onFocus={() => {
            handleErrors(null, "confirmacaoSenha");
          }}
          onChangeText={(text) => handleOnChange(text, "confirmacaoSenha")}
        />
        <View style={estilos.botoes}>
          <Button
            back
            textBack
            title="Voltar"
            onPress={() => {
              navigation.navigate("Splash");
            }}
          />
          <Button
            title="Avançar"
            onPress={validate}
          />
        </View>
        <View style={estilos.passo}>
          <Image source={require(passo1)} />
        </View>
      </View>
    </Layout>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewForm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
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
  imagemFundo: {
    justifyContent: "flex-end",
    flex: 3,
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  botoes: {
    flexDirection: "row",
    width: 265,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  passo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: COLORS.branco,
    resizeMode: "cover",
  },
  selectContainer: {
    top: 15,
  },
  formContainer: {
    width: 334,
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  label: {},
});

export default Cadastro;
