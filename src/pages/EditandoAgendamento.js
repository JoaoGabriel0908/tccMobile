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
import React, { useState, useEffect, useContext, useMemo } from "react";
import COLORS from "../const/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import apiBlood from "../service/apiBlood";
import { AuthContext } from "../contexts/Contexts";
import { Calendar } from "react-native-calendars";

const fundo = "../assets/fundo.png";

const EditandoAgendamento = ({ route }) => {
  const navigation = useNavigation();

  const { id } = route.params;
  const { idHemocentro } = route.params;
  const { userInfo } = useContext(AuthContext);

  console.log(id);

  const [hemocentro, setHemocentro] = useState([]);
  const [selected, setSelected] = useState([]);
  const [dias, setDias] = useState([]);
  const [hora, setHora] = useState([]);
  const [consulta, setConsulta] = useState([]);

  useEffect(() => {
    apiBlood.get(`/ListarTipoServicoPorHemocentro/${id}`).then((data) => {
      // console.log(data.data[0]);
      setHemocentro(data.data[0]);
    });
  }, []);

  useEffect(() => {
    apiBlood.get(`/diasDisponiveis/${idHemocentro}`).then((data) => {
      console.log(data.data);
      setDias(data.data);
    });
  }, []);

  useEffect(() => {
    apiBlood.get(`/listarConsultaPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0]);
      setConsulta(data.data[0]);
    });
  }, []);

  const handleChangeInputs = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const handleChangeAgends = (key, value) => {
    apiBlood
      .get(`/listarHorariosPorData/${idHemocentro}/${value}`)
      .then((data) => {
        // console.log(data.data[0]);
        setHora(data.data[0]);
      });
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  const [inputs, setInputs] = React.useState({
    hemocentro: idHemocentro,
    data_agenda: "",
    hora_agenda: "",
    id_doador: userInfo.id,
    tipoServico: 0,
    idAgendamentoDoador: id,
  });

  const validate = () => {
    let validate = true;

    if (validate) {
      // console.log(inputs);
      agendar();
    }
  };
  // console.log(inputs);
  const agendar = () => {
    try {
      const response = apiBlood
        .put("/AtualizarConsulta", {
          id_agendamento_doador: inputs.idAgendamentoDoador,
          data_agendada_doador: inputs.data_agenda,
          hora: inputs.hora_agenda,
          id_tipo_servico: inputs.tipoServico,
          id_doador: userInfo.id,
          id_unidade_hemocentro: inputs.hemocentro,
        })
        .then((response) => {
          // console.log(response.status);
          if (response.status === 200) {
            navigation.navigate("AgendamentoConcluido");
          }
        })
        .catch((e) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(inputs);

  function CustomCalendar(props) {
    const markedDay = {};

    dias.map((item) => {
      (markedDay[item.data_coleta] = {
        marked: true,
        dotColor: "purple",
        color: "purple",
      }),
        (markedDay[selected] = {
          selected: true,
          selectedColor: "#222222",
          selectedTextColor: "yellow",
        });
    });
    return (
      <Calendar
        markedDates={markedDay}
        enableSwipeMonths={true}
        onDayPress={(day) => {
          setSelected(day.dateString);
          props.onDaySelect && props.onDaySelect(day);
        }}
        {...props}
      />
    );
  }

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.containerData}>
        <View style={estilos.dataAgenda}>
          <Text style={estilos.dateText}>Selecione uma data</Text>

          <View style={estilos.dia}>
            <CustomCalendar
              onDaySelect={(day) =>
                handleChangeAgends("data_agenda", day.dateString)
              }
            />
          </View>
          <Text style={estilos.dateText}>Selecione a hora</Text>

          <View style={estilos.hora}>
            <Picker
              selectedValue={inputs.hora_agenda}
              onValueChange={(itemValue) =>
                handleChangeInputs("hora_agenda", itemValue)
              }
            >
              {hora.map((hora) => {
                return (
                  <Picker.Item
                    key={hora.id}
                    label={hora.hora_coleta}
                    value={hora.hora_coleta}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
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
            {consulta.map((consulta) => {
              return (
                <Picker.Item
                  key={consulta.id_tipo_servico}
                  label={consulta.tipo_servico}
                  value={consulta.id_tipo_servico}
                />
              );
            })}
          </Picker>
        </View>
      </View>
      <View style={estilos.button}>
        <Button title="Agendar" onPress={agendar} />
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  dataAgenda: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  containerData: {
    alignItems: "center",
    width: 360,
    marginTop: 20,
  },
  dia: {
    width: "80%",
  },
  hora: {
    width: "80%",
    backgroundColor: COLORS.branco,
  },
  input: {
    borderWidth: 1,
    height: 55,
    backgroundColor: COLORS.branco,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  dateText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    color: COLORS.vermelhoPrincipal,
    marginTop: 10,
  },
  dateHora: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    color: COLORS.vermelhoPrincipal,
    marginTop: 20,
  },
  picker: {
    width: 350,
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: COLORS.branco,
    marginBottom: 10,
  },
  button: {
    width: 334,
    alignItems: "center",
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
    margin: 40,
  },
});

export default EditandoAgendamento;
