import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "./Input";
import Select from "./Select";
import { Picker } from "@react-native-picker/picker";
import CardAgends from "./CardAgends";

const DadosPerfil = ({
  nameComplet,
  iconName,
  nameGenres,
  clinicasSeguidas,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.cidadeContainer}>
        <Text style={estilos.text}>Cidade residente</Text>
        <Input inputPequeno />
      </View>
      <View style={estilos.nascimentoContainer}>
        <Text style={estilos.text}>Data nascimento</Text>
        <Input inputPequeno />
      </View>
      <View>
        <View>
          <Text style={estilos.text} textPequeno>E-mail</Text>
          <Input inputPequeno />
        </View>
        <View>
          <Text style={estilos.text}>Celular</Text>
          <Input inputPequeno />
        </View>
        <View>
          <Text style={estilos.text}>{clinicasSeguidas}</Text>
          <Icon name={iconName} />
        </View>
        <View style={estilos.local}>
          <Text style={{position: "absolute", bottom: 60}}>Locais de doação selecionados</Text>
          <View style={estilos.cidades}>
            <Select />
          </View>
          <View style={estilos.id_estadoDoacao}>
            <Picker
              // onFocus={() => {
              //   handleErrors(null, "id_estadoDoacao");
              // }}
              // selectedValue={inputs.id_estado}
              // onValueChange={(itemValue) =>
              //   handleChangeEstado("id_estado", itemValue)
              // }
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
        <CardAgends />
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: COLORS.branco,
    width: '100%',
    paddingTop: 10,
    justifyContent: 'center',
  },
  primeiroContainer: {
    width: 360,
    flexDirection: "row",
  },
  nascimentoContainer: {
    flex: 1,
  },
  cidades: {
    height: 50,
    width: '45%',
    marginRight: '5%',
  },
  id_estadoDoacao: {
    width: "30%",
    height: 50,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  cidadesEscolhidos: {
    width: 30,
    backgroundColor: COLORS.vermelhoClaro,
  },
  text:{
    alignContent: "center",
    // backgroundColor: COLORS.preto,
    textAlign: "center",
  },
  local: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default DadosPerfil;
