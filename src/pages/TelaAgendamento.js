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

  console.log(route)

  // console.log(id);

  useEffect(() => {
    apiBlood.get(`/listarHemocentroPorId/${id}`).then((data) => {
      console.log(data.data[0]);
      setHemocentro(data.data[0]);
    });
  }, []);

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
  const [hemocentro, setHemocentro] = useState("Selecione o horário");

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
    setText(formatDate);
    setHour(formatTime);

    console.log(formatDate + " (" + formatTime + ") ");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [inputs, setInputs] = React.useState({
    id_sexo: 0,
  });

  const agendar = () => {
    try {
      const response = apiBlood
    }
    catch (error) {
      error.response.data
    }
  }

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
            />
          )}
        </View>
        <View style={estilos.containerData}>
          <Text style={estilos.dateText}>Selecione o tipo de doação</Text>
          <View style={estilos.picker}>
            {/* <Picker
              placeholder="id_Sexo"
              onFocus={() => {
                handleErrors(null, "id_sexo");
              }}
              selectedValue={inputs.id_sexo}
              onValueChange={(itemValue) =>
                handleChangeInputs("id_sexo", itemValue)
              }
            >
              {sexo.map((sexo) => {
                return <Picker.Item label={sexo.sexo} value={sexo.Id} />;
              })}
            </Picker> */}
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
