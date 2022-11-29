import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Platform,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import COLORS from "../const/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import apiBlood from "../service/apiBlood";

const fundo = "../assets/fundo.png";

const TelaAgendamento = ({ route }) => {
  const { id } = route.params[0];
  const { idDoador } = route.params[1];

  // console.log(route)
  console.log(id);

  // useEffect(() => {
  //   apiBlood.get(`/listarHemocentroPorId/${id}`).then((data) => {
  //     console.log(data.data[0]);
  //     setHemocentro(data.data[0]);
  //   });
  // }, []);

  useEffect(() => {
    apiBlood.get(`/ListarTipoServicoPorHemocentro/${id}`).then((data) => {
      console.log(data.data[0]);
      setHemocentro(data.data[0]);
    });
  }, []);

  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Selecione a data");
  const [hour, setHour] = useState("Selecione o horário");
  const [hemocentro, setHemocentro] = useState([]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formatDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    let formatTime = tempDate.getHours() + ":" + tempDate.getMinutes();

    let dateBanco =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();

      if((tempDate.getMonth() + 1).length < 2){
        tempDate.getMonth() = '0' + tempDate.getMonth()
      }
      if(tempDate.getDate().length < 2) {
        tempDate.getDate() = '0' + tempDate.getDate();
      }

    setText(formatDate);
    setHour(formatTime);

    console.log(dateBanco + " (" + formatTime + ") ");
    return dateBanco
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const handleChangeInputs = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const [inputs, setInputs] = React.useState({
    hemocentro: 0,
  });

  const agendar = () => {
    try {
      const response = apiBlood.post("/CadastrarConsulta", {});
    } catch (error) {
      error.response.data;
    }
  };

  console.log(hemocentro);

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.content}>
        <View style={estilos.containerData}>
          <Text style={estilos.dateText}>Selecione uma data</Text>
          <View style={estilos.dataAgenda}>
            <View style={estilos.dia}>
              <TextInput
                style={estilos.input}
                onPressIn={() => showMode("date")}
                placeholder="Selecione a data"
                value={text}
              />
            </View>
            <View style={estilos.hora}>
              <TextInput
                style={estilos.input}
                onPressIn={() => showMode("time")}
                placeholder="Selecione a hora"
                value={hour}
              />
            </View>
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
        </View>
        <View style={estilos.containerData}>
          <Text style={estilos.dateText}>Selecione o tipo de doação</Text>
          <View style={estilos.picker}>
            <Picker
              placeholder="tipoServico"
              // onFocus={() => {
              //   handleErrors(null, "tipoServico");
              // }}
              selectedValue={inputs.tipoServico}
              onValueChange={(itemValue) =>
                handleChangeInputs("tipoServico", itemValue)
              }
            >
              {hemocentro.map((hemocentro) => {
                return (
                  <Picker.Item
                    label={hemocentro.tipo_servico}
                    value={hemocentro.id}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
        <View style={estilos.button}>
          <Button
            title="Agendar"
            onPress={() => {
              navigation.navigate("AgendamentoConcluido");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataAgenda: {
    flexDirection: "row",
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  dia: {
    width: "55%",
    marginRight: "5%",
  },
  hora: {
    width: "50%",
  },
  input: {
    borderWidth: 1,
    height: 55,
    backgroundColor: COLORS.branco,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  containerData: {
    alignItems: "center",
    width: 360,
    marginTop: 30,
  },
  dateText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    color: COLORS.vermelhoPrincipal,
    marginBottom: 10,
  },
  picker: {
    width: 350,
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: COLORS.branco,
    marginBottom: 40,
  },
  button: {
    width: 334,
    alignItems: "center",
  },
});

export default TelaAgendamento;
