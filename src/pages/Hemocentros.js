import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import apiBlood from "../service/apiBlood";
import { ScrollView } from "react-native";
import CardHemo from "../components/CardHemo";

const PerfilHemo = "../assets/Ellipse3.png";

const Hemocentros = ({ data }) => {
  const navigation = useNavigation();

  const [hemocentro, setHemocentro] = useState([]);
  const [hemocentroFiltrado, setHemocentroFiltrado] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    apiBlood.get("/listarHemocentro").then((data) => {
      console.log(data.data[0]);
      setHemocentro(data.data[0]);
      setHemocentroFiltrado(data.data[0]);
    });
  }, []);

  const searchFilterText = (text) => {
    if (text) {
      const newData = hemocentro.filter((item) => {
        const itemData = item.cidade
          ? item.cidade.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          : "".normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "");;
        const textData = text.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "");
        return itemData.indexOf(textData) > -1;
      });
      setHemocentroFiltrado(newData);
      setSearchText(text);
    } else {
      setHemocentroFiltrado(hemocentro);
      setSearchText(text);
    }
  };

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: COLORS.branco,
        height: 1.5,
      }}
    />
  );

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={
          <Input
            inputPequeno
            keyboardType="default"
            onChangeText={(s) => searchFilterText(s)}
            value={searchText}
            iconName="magnify"
            name={null}
            placeholder="Pesquise hemocentros perto de você"
          />
        }
        ListHeaderComponentStyle={{
          backgroundColor: COLORS.vermelhoClaro,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 30,
        }}
        data={hemocentroFiltrado}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <CardHemo data={item} />}
        nestedScrollEnabled
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Hemocentros;
