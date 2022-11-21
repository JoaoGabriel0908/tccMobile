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
import React, { useState } from "react";
import COLORS from "../const/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

const fundo = "../assets/fundo.png";

const TelaAgendamento = ({}) => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Selecione a data");
  const [hour, setHour] = useState("Selecione o horário");

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
    let formatTime =
      "Horas" + tempDate.getHours() + "| Minutos: " + tempDate.getMinutes();
    setText(formatDate);
    setHour(formatTime);

    console.log(formatDate + " (" + formatTime + ") ");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

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
        <View>
          <Text style={estilos.dateText}>Selecione o tipo de doação</Text>
          <View style={estilos.picker}>
            <Picker />
          </View>
        </View>
        <View>
          <Text style={estilos.dateText}>Selecione o seu tipo sanguíneo</Text>
          <View style={estilos.picker}>
            <Picker />
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
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    color: COLORS.vermelhoPrincipal,
    alignItems: "flex-start",
    marginBottom: 20,
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
    top: 150,
  },
});

export default TelaAgendamento;
