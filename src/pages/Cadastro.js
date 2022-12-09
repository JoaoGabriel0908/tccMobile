import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
} from "react-native";

import React, { useEffect, useState } from "react";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { Picker } from "@react-native-picker/picker";
import apiBlood from "../service/apiBlood";
import validarCPF from "../utils/validarCpf";
import InputIcon from "../components/InputIcon";
import Select from "../components/Select";
import Checkbox from "expo-checkbox";

const Cadastro = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState([]);
  const [cidades, setCidade] = useState([]);
  const [cidadesFiltradas, setCidadeFiltradas] = useState();
  const [estados, setEstado] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [tipoSanguineo, setTipoSanguineo] = useState([]);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    apiBlood.get("/listarTipoSanguineo").then((data) => {
      // console.log(data);
      setTipoSanguineo(data.data);
    });
  }, []);

  useEffect(() => {
    apiBlood.get("/listarSexo").then((data) => {
      // console.log(data.data);
      setSexo(data.data);
    });
  }, []);

  useEffect(() => {
    apiBlood.get("/listarEstados").then((data) => {
      console.log(data.data[0]);
      setEstado(data.data);
    });
  }, []);

  const handleChangeInputs = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const handleChangeEstado = (key, value) => {
    buscarCidades(value);
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const buscarCidades = (id) => {
    apiBlood.get(`/listarCidadesPorEstado/${id}`).then((data) => {
      console.log(data.data);
      setCidade(data.data);
      setCidadeFiltradas(data.data);
    });
  };

  const [inputs, setInputs] = React.useState({
    // O useState sempre representa essa estrutura
    // Chave = inputs / valor = inputs
    nome_completo: "",
    email: "",
    id_cidade_doacao: [],
    id_estado: 0,
    cpf: "",
    senha: "",
    // confirmacaoSenha: "",
    id_sexo: 0,
    id_tipo_sanguineo: 0,
  });

  // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA
  // STATE NO MÉTODO OnChangeText
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

  const handleErrorsPicker = (errorMessage, Picker) => {
    // Quando usamos um par de parenteses quer dizer que estamos dando um RETURN
    setErrors((prevState) => ({
      ...prevState,
      [Picker]: errorMessage,
    }));
  };

  // Função de validação
  const validate = () => {
    let validate = true;

    // Quando máo tem conteúdo o validate ficará falso e aparecerá a mensagem
    if (!inputs.nome_completo) {
      validate = false;
      handleErrors("Informe o nome completo", "nome_completo");
      // console.log('Título em branco')
    } else if (
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/^\(\)0-9]/gi.test(
        inputs.nome_completo
      )
    ) {
      validate = false;
      handleErrors(
        "Elementos especias e pontuação não são permitidos",
        "nome_completo"
      );
    }
    if (!inputs.email) {
      validate = false;
      handleErrors("Informe o seu e-mail", "email");
      // console.log('Descrição em branco')
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)) {
      validate = false;
      handleErrors("Email inválido", "email");
    }
    if (!inputs.id_cidade_doacao) {
      validate = false;
      handleErrors("Informe a cidade de doação", "id_cidade_doacao");
      // console.log('Descrição em branco')
    }
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
      cadastrar();
      console.log("Cadastrou");
    }

    console.log(errors);
  };

  // Função que cria o cadastro com o post
  const cadastrar = () => {
    try {
      const response = apiBlood.post("/cadastrarDoador", {
        nome_completo: inputs.nome_completo,
        email: inputs.email,
        id_cidade_doacao: inputs.id_cidade_doacao,
        id_estado: inputs.id_estado,
        cpf: inputs.cpf,
        senha: inputs.senha,
        // confirmacaoSenha: inputs.confirmacaoSenha,
        id_sexo: inputs.id_sexo,
        id_tipo_sanguineo: inputs.id_tipo_sanguineo,
      });
      navigation.navigate("Terms");
    } catch (error) {
      alert("Insira todas as informações necessárias");
      error.response.data;
    }
  };

  // useEffect(() => {
  //   buscarCidades(inputs.id_estado);
  //   console.log(cidades);
  // }, [inputs.id_estado]);

  const onChangeValue = (itemSelected, index) => {
    const newCity = cidades.map((item) => {
      console.log(itemSelected.id);
      if (item.id == itemSelected.id) {
        return {
          ...item,
          selected: !item.selected,
          setChecked: false,
        };
      }
      return {
        ...item,
        selected: item.selected,
        setChecked: true,
      };
    });
    setCidade(newCity);
    setCidadeFiltradas(newCity);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={estilos.item}>
        <Text>{item.cidade}</Text>
        <Checkbox
          style={estilos.checkbox}
          onAnimationType="fill"
          key={"checkbox"}
          disabled={false}
          offAnimationType="fade"
          boxType="square"
          value={item.selected ? true : false}
          onValueChange={() => onChangeValue(item, index)}
        />
      </View>
    );
  };

  const onPressShowItemSelected = () => {
    const listSelected = cidadesFiltradas.filter(
      (item) => item.selected == true
    );
    console.log(listSelected);
    let contentAlert = "";
    listSelected.forEach((item) => {
      contentAlert = contentAlert + `${item.id} . ` + item.cidade + "\n";
    });
    const uniqueId = listSelected.map((item) => item.id);
    console.log(uniqueId);
    Alert.alert(contentAlert);
    handleChangeInputs("id_cidade_doacao", uniqueId);
    return uniqueId;
  };

  const searchFilterText = (text) => {
    if (text) {
      const newData = cidades.filter((item) => {
        const itemData = item.cidade
          ? item.cidade.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          : "".normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const textData = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return itemData.indexOf(textData) > -1;
      });
      setCidadeFiltradas(newData);
      setSearchText(text);
    } else {
      setCidadeFiltradas(cidades);
      setSearchText(text);
    }
  };

  return (
    <Layout>
      <View style={estilos.viewForm}>
        <Input
          name="name"
          key={"NameCompleto"}
          placeholder="Nome Completo"
          value={inputs.nome_completo}
          iconName="account"
          error={errors.nome_completo}
          onFocus={() => {
            handleErrors(null, "nome_completo");
          }}
          keyboardType="default"
          onChangeText={(text) => handleOnChange(text, "nome_completo")}
        />
        <Input
          name="email"
          key={"Email"}
          placeholder="E-Mail"
          iconName="email"
          value={inputs.email}
          error={errors.email}
          onFocus={() => {
            handleErrors(null, "email");
          }}
          keyboardType="default"
          onChangeText={(text) => handleOnChange(text, "email")}
        />
        <View style={estilos.selectContainerPessoal}>
          <Text style={estilos.label}></Text>
          <View style={estilos.id_sexo}>
            <Picker
              placeholder="id_Sexo"
              key={"Sexo"}
              onFocus={() => {
                handleErrors(null, "id_sexo");
              }}
              selectedValue={inputs.id_sexo}
              onValueChange={(itemValue) =>
                handleChangeInputs("id_sexo", itemValue)
              }
            >
              {sexo.map((sexo) => {
                return (
                  <Picker.Item
                    key={sexo.Id}
                    label={sexo.sexo}
                    value={sexo.Id}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={estilos.id_tipo_sanguineo}>
            <Picker
              placeholder="Tipo sanguineo"
              onFocus={() => {
                handleErrors(null, "id_tipo_sanguineo");
              }}
              selectedValue={inputs.id_tipo_sanguineo}
              onValueChange={(itemValue) =>
                handleChangeInputs("id_tipo_sanguineo", itemValue)
              }
            >
              {tipoSanguineo.map((sanguineo) => {
                return (
                  <Picker.Item
                    key={sanguineo.id}
                    label={sanguineo.tipo_sanguineo}
                    value={sanguineo.id}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
        <View style={estilos.selectContainer}>
          {/* <Text style={estilos.label}>Cidades que pretende doar</Text> */}
          <View style={estilos.formContainer}>
            <View style={estilos.id_cidade_doacao}>
              <Select
                onChangeText={(s) => searchFilterText(s)}
                value={searchText}
                key={"cidades"}
                // options={cidades}
                keyExtractor={(item) => `key-${item.id}`}
                renderItem={renderItem}
                onChangeSelect={(id) => alert(id)}
                data={cidadesFiltradas}
                text="Selecione a cidade de doação"
                onPress={onPressShowItemSelected}
              />
            </View>
            <View style={estilos.id_estadoDoacao}>
              <Picker
                key={"estado"}
                onFocus={() => {
                  handleErrors(null, "id_estadoDoacao");
                }}
                selectedValue={inputs.id_estado}
                onValueChange={(itemValue) =>
                  handleChangeEstado("id_estado", itemValue)
                }
              >
                {estados.map((id_estado) => {
                  return (
                    <Picker.Item
                      key={id_estado.id}
                      label={id_estado.uf}
                      value={id_estado.id}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>

        <Input
          name="cpf"
          key={"Cpf"}
          placeholder="CPF"
          values={inputs.cpf}
          iconName="card-account-details"
          error={errors.cpf}
          onFocus={() => {
            handleErrors(null, "cpf");
          }}
          onChangeText={(text) => handleOnChange(text, "cpf")}
          keyboardType="numeric"
          // onBlur={() => {
          //   aplicar(inputs.cpf);
          // }}
          maxLength={11}
        />
        <InputIcon
          name="senha"
          key={"Senha"}
          icon="lock"
          placeholder="Senha"
          values={inputs.senha}
          error={errors.senha}
          onFocus={() => {
            handleErrors(null, "senha");
          }}
          keyboardType="default"
          onChangeText={(text) => handleOnChange(text, "senha")}
        />

        <InputIcon
          name="confirmacaoSenha"
          key={"ConfirmacaoSenha"}
          icon="lock"
          placeholder="Confirmação de senha"
          values={inputs.confirmacaoSenha}
          error={errors.confirmacaoSenha}
          onFocus={() => {
            handleErrors(null, "confirmacaoSenha");
          }}
          keyboardType="default"
          onChangeText={(text) => handleOnChange(text, "confirmacaoSenha")}
        />
        <View style={estilos.botoes}>
          <Button
            key={"voltar"}
            back
            textBack
            title="Voltar"
            onPress={() => {
              navigation.navigate("Splash");
            }}
          />
          <Button key={"avancar"} title="Avançar" onPress={validate} />
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
    paddingBottom: 15,
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
    width: 334,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
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
    marginTop: 20,
  },
  selectContainerPessoal: {
    flexDirection: "row",
    top: 15,
    width: 334,
    marginTop: 10,
  },
  formContainer: {
    width: 334,
    borderColor: COLORS.preto,
    flexDirection: "row",
    marginTop: 10,
    bottom: 10,
  },
  id_cidade_doacao: {
    width: "60%",
    height: 55,
    borderColor: COLORS.preto,
    borderRadius: 15,
    backgroundColor: COLORS.branco,
    marginRight: "5%",
  },
  id_estadoDoacao: {
    width: "35%",
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: COLORS.branco,
  },
  id_sexo: {
    width: "60%",
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: COLORS.branco,
    marginRight: "5%",
  },
  id_tipo_sanguineo: {
    width: "35%",
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: COLORS.branco,
  },
  item: {
    flexDirection: "row",
    marginTop: 8,
    padding: 4,
    paddingBottom: 10,
    justifyContent: "space-between",
    shadowColor: COLORS.preto,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    width: 200,
    textAlign: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  label: {
    textAlign: "center",
  },
});

export default Cadastro;
