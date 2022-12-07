import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";

import React, { useEffect, useState, useContext } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Input from "../components/Input";
import COLORS from "../const/Colors";
import Desativar from "./DesativarConta";
import apiBlood from "../service/apiBlood";
import { AuthContext } from "../contexts/Contexts";
import Select from "../components/Select";
import Checkbox from "expo-checkbox";

const person = "../assets/Ellipse8.png";

const EditarPerfil = () => {
  const navigation = useNavigation();

  const [cidades, setCidade] = useState([]);
  const [cidadesFiltradas, setCidadeFiltradas] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [tipoSanguineo, setTipoSanguineo] = useState([]);
  const [estados, setEstado] = useState([]);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");

  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    apiBlood.get(`/listarDoadorId/${userInfo.id}`).then((data) => {
      console.log(data.data);
      setInputs(data.data);
    });

    apiBlood.get("/listarSexo").then((data) => {
      // console.log(data.data[0]);
      setSexo(data.data);
    });

    apiBlood.get("/listarTipoSanguineo").then((data) => {
      // console.log(data.data);
      setTipoSanguineo(data.data);
    });

    apiBlood.get("/listarEstados").then((data) => {
      console.log(data.data);
      setEstado(data.data);
    });
  }, []);

  const handleChangeEstado = (key, value) => {
    buscarCidades(value);
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  useEffect(() => {
    apiBlood.get(`/listarCidadesPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0]);
      setCidadeFiltradas(data.data[0]);
    });
  }, []);

  const buscarCidades = (id) => {
    apiBlood.get(`/listarCidadesPorEstado/${id}`).then((data) => {
      console.log(data.data);
      setCidade(data.data);
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formatDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();

    setText(formatDate);

    handleChangeInputs("data_nascimento", text);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [inputs, setInputs] = React.useState({
    // O useState sempre representa essa estrutura
    // Chave = inputs / valor = inputs
    nome_completo: "",
    email: "",
    telefone_doador: "",
    data_nascimento: "",
    id_cidade_doacao: [],
    id_estado: 0,
    cpf: "",
    senha: "",
    // confirmacaoSenha: "",
    id_sexo: 0,
    id_tipo_sanguineo: 0,
    cidade_residente: "",
  });

  const [errors, setErrors] = React.useState([]);

  const handleErrors = (errorMessage, input) => {
    // Quando usamos um par de parenteses quer dizer que estamos dando um RETURN
    setErrors((prevState) => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };

  const handleChangeInputs = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

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

  const validate = () => {
    let validate = true;

    // Quando máo tem conteúdo o validate ficará falso e aparecerá a mensagem
    if (!inputs.nome_completo) {
      validate = false;
      handleErrors("Informe o seu nome", "nome_completo");
      // console.log('Título em branco')
    }

    if (validate) {
      // Envia os dados para a API cadastrar.
      editar();
      console.log("Editou");
    }

    console.log(errors);
  };

  console.log(inputs);

  const editar = () => {
    try {
      const response = apiBlood.put(`/updateUsuario/${userInfo.id}`, {
        nome_completo: inputs.nome_completo,
        email: inputs.email,
        telefone_doador: inputs.telefone_doador,
        data_nascimento: inputs.data_nascimento,
        id_cidade_doacao: inputs.id_cidade_doacao,
        id_estado: inputs.id_estado,
        id_sexo: inputs.id_sexo,
        id_tipo_sanguineo: inputs.id_tipo_sanguineo,
        id_cidade: inputs.id_cidade_doacao
      });
      navigation.goBack();
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  const onChangeValue = (itemSelected, index) => {
    // console.log(itemSelected);
    const newCity = cidades.map((item) => {
      console.log(itemSelected.id);
      if (item.id == itemSelected.id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return {
        ...item,
        selected: item.selected,
      };
    });
    setCidade(newCity);
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
    const listSelected = cidades.filter((item) => item.selected == true);
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

  function search(s) {
    let arr = JSON.parse(JSON.stringify(cidadesFiltradas));
    setCidade(arr.filter((city) => city.cidade.includes(s)));
    setCidade(arr);
  }

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
            borderRadius: 15,
          }}
        >
          <Text style={estilos.Text}>Alterar foto de Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.cidadeContainer}>
        <Text style={estilos.title}>Nome completo</Text>
        <Input
          inputPequeno
          value={inputs.nome_completo}
          onChangeText={(text) => handleOnChange(text, "nome_completo")}
          error={errors.nome_completo}
          onFocus={() => {
            // Tirando a mensagem de erro
            handleErrors(null, "nome_completo");
          }}
        />
      </View>
      <View style={estilos.nascimentoContainer}>
        <Text style={estilos.title}>Genero</Text>
        <View style={estilos.picker}>
          <Picker
            placeholder="Sexo"
            // onFocus={() => {
            //   handleErrors(null, "sexo");
            // }}
            selectedValue={inputs.id_sexo}
            onValueChange={(itemValue) =>
              handleChangeInputs("id_sexo", itemValue)
            }
          >
            {sexo.map((sexo) => {
              return <Picker.Item label={sexo.sexo} value={sexo.Id} />;
            })}
          </Picker>
        </View>
      </View>
      <View>
        <View>
          <Text style={estilos.title}>Tipo sanguíneo</Text>
          <View style={estilos.picker}>
            <Picker
              placeholder="Tipo sanguíneo"
              // onFocus={() => {
              //   handleErrors(null, "sexo");
              // }}
              selectedValue={inputs.id_tipo_sanguineo}
              onValueChange={(itemValue) =>
                handleChangeInputs("id_tipo_sanguineo", itemValue)
              }
            >
              {tipoSanguineo.map((sanguineo) => {
                return (
                  <Picker.Item
                    label={sanguineo.tipo_sanguineo}
                    value={sanguineo.id}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
        <View>
          <Text style={estilos.title}>Data nascimento</Text>
          <Input
            placeholder="__/__/__"
            inputPequeno
            value={inputs.data_nascimento}
            onChangeText={(text) => handleOnChange(text, "data_nascimento")}
            onFocus={() => {
              // Tirando a mensagem de erro
              handleErrors(null, "data_nascimento");
            }}
            onPressIn={() => showMode("date")}
          />
        </View>
        {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              dateFormat="dd/MM/yyyy"
            />
          )}
        <View style={estilos.cidadesEscolhidos}>
          <Text style={estilos.subtitle}>Localização</Text>
        </View>
        <View style={estilos.cidadeContainer}>
          <Text style={estilos.title}>Cidade Residente</Text>
          <TextInput
            style={estilos.inputCidRes}
            value={inputs.cidade_residente}
            onChangeText={(text) => handleOnChange(text, "cidade_residente")}
          />
        </View>
        <View style={estilos.cidadeContainer}>
          <Text style={estilos.titleEstado}>Estado</Text>
          <Picker
            key={"estado"}
            onFocus={() => {
              handleErrors(null, "id_estado");
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
        <View style={estilos.cidadeContainer}>
          <Text style={estilos.titleCidades}>Cidades que pretende doar </Text>
          <View style={{ height: 20 }}>
            <Select
              onChangeText={(s) => search(s)}
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

          <Text style={estilos.subtitle}>Dados de contato</Text>
          <Text style={estilos.title}>Celular</Text>
          <Input
            placeholder="(00)12345-6789"
            inputPequeno
            value={inputs.telefone_doador}
            onChangeText={(text) => handleOnChange(text, "telefone_doador")}
            onFocus={() => {
              // Tirando a mensagem de erro
              handleErrors(null, "nome_completo");
            }}
          />

          <Text style={estilos.title}>Email</Text>
          <Input
            inputPequeno
            value={inputs.email}
            onChangeText={(text) => handleOnChange(text, "email")}
            error={errors.email}
            onFocus={() => {
              // Tirando a mensagem de erro
              handleErrors(null, "email");
            }}
          />
          <View style={estilos.btn}>
            <Button title="Editar" onPress={validate} />
            <Desativar />
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
    marginBottom: 3,
    fontSize: 17,
  },
  input: {
    width: 370,
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
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
  picker: {
    width: 334,
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    borderRadius: 15,
    left: 40,
    backgroundColor: COLORS.branco,
  },
  inputCidRes: {
    width: 220,
    height: 55,
    // backgroundColor: COLORS.cinza,
    borderColor: COLORS.preto,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    left: 35,
  },

  inputEstado: {
    width: 130,
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    left: 270,
    top: -85,
  },
  titleEstado: {
    fontWeight: "regular",
    left: 50,
    marginBottom: 9,
    fontSize: 17,
    left: 290,
    top: -81,
  },
  titleCidades: {
    fontWeight: "regular",
    left: 50,

    fontSize: 17,
    justifyContent: "center",
    alignItems: "center",
    top: -60,
  },
  inputCidade: {
    width: 370,
    height: 150,
    borderColor: COLORS.preto,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    left: 35,
    top: -50,
  },
  pickerborda: {
    borderRadius: 15,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditarPerfil;
