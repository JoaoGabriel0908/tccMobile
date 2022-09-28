import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import COLORS from "../const/Colors";
import { useNavigation } from "@react-navigation/native";

const passo1 = "../assets/Group8.png";

const Terms = () => {
  const navigate = useNavigation()
  return (
    <Layout>
      <View>
        <Text style={estilos.textTitle}>
          Política de Privacidade e Segurança de Dados
        </Text>
      </View>
      <View style={estilos.viewForm}>
        <ScrollView style={estilos.containerText}>
          <Text>
            “Termos e Condições” é o documento que rege a relação contratual
            entre o prestador de um serviço e seu usuário. Na web, este
            documento também é chamado de“. “Termos e Condições” é o documento
            que rege a relação contratual entre o prestador de um serviço e seu
            usuário. Na web, este documento também é chamado de “. “Termos e
            Condições” é o documento que rege a relação contratual entre o
            prestador de um serviço e seu usuário. Na web, este documento também
            é chamado de “.
            “Termos e Condições” é o documento que rege a relação contratual
            entre o prestador de um serviço e seu usuário. Na web, este
            documento também é chamado de“. “Termos e Condições” é o documento
            que rege a relação contratual entre o prestador de um serviço e seu
            usuário. Na web, este documento também é chamado de “. “Termos e
            Condições” é o documento que rege a relação contratual entre o
            prestador de um serviço e seu usuário. Na web, este documento também
            é chamado de “.
            “Termos e Condições” é o documento que rege a relação contratual
            entre o prestador de um serviço e seu usuário. Na web, este
            documento também é chamado de“. “Termos e Condições” é o documento
            que rege a relação contratual entre o prestador de um serviço e seu
            usuário. Na web, este documento também é chamado de “. “Termos e
            Condições” é o documento que rege a relação contratual entre o
            prestador de um serviço e seu usuário. Na web, este documento também
            é chamado de “.
            “Termos e Condições” é o documento que rege a relação contratual
            entre o prestador de um serviço e seu usuário. Na web, este
            documento também é chamado de“. “Termos e Condições” é o documento
            que rege a relação contratual entre o prestador de um serviço e seu
            usuário. Na web, este documento também é chamado de “. “Termos e
            Condições” é o documento que rege a relação contratual entre o
            prestador de um serviço e seu usuário. Na web, este documento também
            é chamado de “.
            “Termos e Condições” é o documento que rege a relação contratual
            entre o prestador de um serviço e seu usuário. Na web, este
            documento também é chamado de“. “Termos e Condições” é o documento
            que rege a relação contratual entre o prestador de um serviço e seu
            usuário. Na web, este documento também é chamado de “. “Termos e
            Condições” é o documento que rege a relação contratual entre o
            prestador de um serviço e seu usuário. Na web, este documento também
            é chamado de “.
          </Text>
        </ScrollView>
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
  botoes: {
    flexDirection: "row",
    width: 265,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  containerText: {
    borderColor: COLORS.vermelhoPrincipal,
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 2,
    width: 280,
    paddingHorizontal: 17,
    paddingTop: 28,
    borderWidth: 2,
    borderRadius: 20,
  },
  textTitle: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: COLORS.preto,
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 123,
    marginBottom: 34,
  },
  viewForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 30,
    flex: 1,
    
  },
});

export default Terms;
