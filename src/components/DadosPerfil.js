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
import React, { useState, useEffect } from "react";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "./Input";
import Select from "./Select";
import { Picker } from "@react-native-picker/picker";
import CardAgends from "./CardAgends";
import apiBlood from "../service/apiBlood";

const DadosPerfil = ({
  nameComplet,
  iconName,
  nameGenres,
  clinicasSeguidas,
  email,
  celular,
  selectedLanguage,
  onValueChange = () => {}
}) => {

  const [pessoa, setPessoa] = useState([])
  const [estado, setEstado] = useState([])
  const [cidades, setCidade] = useState([]);

  // useEffect(() => {
  //   apiBlood.get(`/listarDoador/${id}`).then(data => {
  //     console.log(data.data);
  //     setPessoa(data.data);
  //   });
  // }, []);

  console.log(pessoa)

  useEffect(() => {
    apiBlood.get('/listarEstados').then(data => {
      console.log(data.data[0]);
      setEstado(data.data[0]);
    });
  }, []);

  // const {id} = route.params

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.cidadeContainer}>
        <Text style={estilos.text}>Cidade residente</Text>
        <Input inputPequeno editable={false}/>
      </View>
      <View style={estilos.nascimentoContainer}>
        <Text style={estilos.text}>Data nascimento</Text>
        <Input inputPequeno editable={false}/>
      </View>
      <View>
        <View>
          <Text style={estilos.text} textPequeno>Email</Text>
          <Input inputPequeno editable={false}>{email}</Input>
        </View>
        <View>
          <Text style={estilos.text}>Celular</Text>
          <Input inputPequeno editable={false}>{celular}</Input>
        </View>
        <View>
          <Text style={estilos.text}>{clinicasSeguidas}</Text>
          <Icon name={iconName} />
        </View>
        <View style={estilos.local}>
          <Text style={{position: "absolute", bottom: 60}}>Locais de doação selecionados</Text>
          <View style={estilos.cidades}>
            <Select 
            options={cidades}
            keyExtractor={(item) => `key-${item.id}`}
            // renderItem={renderItem}
            onChangeSelect={(id) => alert(id)}
            data={cidades}
            text="Selecione a cidade de doação"
            // onPress={onPressShowItemSelected}
            />
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
