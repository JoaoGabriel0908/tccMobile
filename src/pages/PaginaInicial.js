import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import React, { useEffect, useState, useContext } from "react";
import Campanhas from "../components/Campanhas";
import COLORS from "../const/Colors";
import HemoPaginaInicial from "../components/HemoPaginaInicial";
import { useNavigation } from "@react-navigation/native";
import apiBlood from "../service/apiBlood";
import CardCampanha from "../components/CardCampanha";
import { AuthContext } from "../contexts/Contexts";

const PaginaInicial = ({ route }) => {
  const { userInfo } = useContext(AuthContext);

  const navigation = useNavigation();

  const [refFlatList, setRefFlatList] = useState();
  const [campanha, setCampanha] = useState([]);
  const [hemocentro, setHemocentro] = useState([]);

  useEffect(() => {
    apiBlood.get("/listarHemocentro").then((data) => {
      console.log(data.data[0]);
      setHemocentro(data.data[0]);
    });
  }, []);

  useEffect(() => {
    apiBlood.get("/listarCampanhas").then((data) => {
      console.log(data.data);
      setCampanha(data.data);
    });
  }, []);

  const getItemLayout = (campanha, index) => {
    return { length: 161, offset: 161 * index, index };
  };

  return (
    <ScrollView style={estilos.containerPagina}>
      <ScrollView style={estilos.container}>
        <Text style={estilos.campanhaText}>Campanhas para você</Text>
        <FlatList
          data={campanha}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <CardCampanha data={item} />}
          horizontal
          getItemLayout={getItemLayout}
          ref={(ref) => setRefFlatList(ref)}
        />
      </ScrollView>
      <SafeAreaView style={estilos.hemocentro}>
        <Text style={estilos.campanhaText}>Hemocentros perto de você</Text>
        {hemocentro.map((hemocentro) => (
          <HemoPaginaInicial
            imagem={hemocentro.foto_capa}
            key={hemocentro.id}
            hemoNome={hemocentro.nome_unidade}
            logradouro={hemocentro.logradouro}
            estado={hemocentro.estado}
            cidade={hemocentro.cidade}
            cep={hemocentro.cep}
            bairro={hemocentro.bairro}
            numero={hemocentro.numero}
            onPress={() => {
              navigation.navigate("PerfilHemo", 
                { id: hemocentro.id }
              );
            }}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  containerPagina: {
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
  },
  wrapButton: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    backgroundColor: COLORS.preto,
  },
  campanhaText: {
    marginTop: 20,
    fontWeight: "600",
    fontSize: 20,
    color: COLORS.vermelhoEscuro2,
  },
});

export default PaginaInicial;
