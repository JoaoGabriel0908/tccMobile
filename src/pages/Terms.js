import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";

const Terms = () => {
  return (
    <Layout>
      <View>
        <Text>Política de Privacidade e Segurança de Dados</Text>
      </View>
      <View>
        <View style={{borderColor: '#920707'}}>
          <Text>
            “Termos e Condições” é o documento que rege a relação contratual
            entre o prestador de um serviço e seu usuário. Na web, este
            documento também é chamado de“. “Termos e Condições” é o documento
            que rege a relação contratual entre o prestador de um serviço e seu
            usuário. Na web, este documento também é chamado de “. “Termos e
            Condições” é o documento que rege a relação contratual entre o
            prestador de um serviço e seu usuário. Na web, este documento também
            é chamado de “.
          </Text>
        </View>
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

export default Terms;
