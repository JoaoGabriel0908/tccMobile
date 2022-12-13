import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CardAgends from "../components/CardAgends";
import { AuthContext } from "../contexts/Contexts";
import apiBlood from "../service/apiBlood";
import COLORS from "../const/Colors";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import PaginaInicial from "./PaginaInicial";

const calendar = "../assets/verifica(1).png";

const AgendamentoConcluido = () => {
  const navigation = useNavigation();
  const [consulta, setConsulta] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const [stop, setStop] = useState(false);

  var trazendoConclusao = setTimeout(() => {
    apiBlood.get(`/listarConsultaPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0]);
      setConsulta(data.data[0]);
      setStop(true);
    });
  }, 2000);

  if (stop === true) {
    clearTimeout(trazendoConclusao);
    console.log(stop);
  }

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Image style={{ height: "40%" }} source={require(calendar)} />
      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
          color: COLORS.vermelhoPrincipal,
          fontFamily: "Poppins_700Bold",
        }}
      >
        Sua consulta irá aparecer no seu perfil!
      </Text>
      <View style={{ height: '40%' }}>
        <FlatList
          data={consulta}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <CardAgends data={item} />}
        />
      </View>
      <Button
        style={{ height: '15%', width: 100, backgroundColor: COLORS.cinza }}
        onPress={() => {
          navigation.navigate("Menu");
        }}
        title={'Tela inicial'}
      >
      </Button>
    </SafeAreaView>
  );
};

export default AgendamentoConcluido;
