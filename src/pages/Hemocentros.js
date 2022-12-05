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

  const getItemLayout = (campanha, index) => {
    return { length: 201, offset: 161 * index, index };
  };

  const searchFilterText = (text) => {
    if(text) {
      const newData = hemocentro.filter((item) => {
        const itemData = item.cidade ? item.cidade : ''
        const textData = text
        return itemData.indexOf(textData) > -1
      });
      setHemocentroFiltrado(newData)
      setSearchText(text)
    } else {
      setHemocentroFiltrado(hemocentro)
      setSearchText(text)
    }
  }

  return (
    <SafeAreaView style={estilos.container}>
      <View style={{height: 150,}}>
        <Input
          name={null}
          placeholder="Pesquise hemocentros perto de você"
          // value={inputs.nomeCompleto}
          iconName="magnify"
          // error={errors.nomeCompleto}
          // onFocus={() => {
          //   handleErrors(null, "nomeCompleto");
          // }}
          keyboardType="default"
          onChangeText={(s) => searchFilterText(s)}
          value={searchText}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={hemocentroFiltrado}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <CardHemo data={item} />}
          nestedScrollEnabled
          showsVerticalScrollIndicator={true}
        />
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
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
  containerText: {
    borderColor: COLORS.preto,
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    width: 330,
    height: 140,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderRadius: 20,
    left: 50,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  descricao: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "regular",
    fontSize: 15,
  },
  image: {
    width: 60,
    height: 60,
  },
  tituloCor: {
    backgroundColor: COLORS.vermelhoClaro,
    borderRadius: 5,
    width: 220,
    left: -20,
  },
  titulo: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Hemocentros;
