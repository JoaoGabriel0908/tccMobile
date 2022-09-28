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
  const [text, setText] = useState("Nome Completo");
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Layout>
      <View>
        <Text style={estilos.textTitle}>Cadastro</Text>
      </View>
      <View style={estilos.viewForm}>
        <Input placeholder="Nome Completo" iconName="account" />
        <Input placeholder="E-Mail" iconName="email" />

        <View style={estilos.selectContainer}>
          <Text style={estilos.label}>Cidades em que pretende doar</Text>
          <View style={estilos.formContainer}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Jandira" value="Jandira" />
              <Picker.Item label="Barueri" value="Barueri" />
              <Picker.Item label="Itapevi" value="Itapevi" />
              <Picker.Item label="Carapicuiba" value="Carapicuiba" />
              <Picker.Item label="Osasco" value="Osasco" />
              <Picker.Item label="Itapeva" value="Itapeva" />
            </Picker>
          </View>
        </View>

        <Input placeholder="CPF" iconName="card-account-details" />
        <Input placeholder="Senha" iconName="lock" />
        <Input placeholder="Confirmação de senha" iconName="lock-off" />
        <View style={estilos.botoes}>
          <Button
            title="Voltar"
            onPress={() => {
              navigation.navigate("Splash");
            }}
          />
          <Button
            title="Avançar"
            onPress={() => {
              navigation.navigate("Terms");
            }}
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
    top:15
  },
  formContainer: {
    width: 334,
    height: 55,
    borderColor: COLORS.preto,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  label: {
    
  }
});

export default Cadastro;
