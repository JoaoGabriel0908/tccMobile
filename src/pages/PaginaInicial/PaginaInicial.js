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

import React, { useEffect, useState } from "react";
import Campanhas from "./Campanhas";
import COLORS from "../../const/Colors";
import Menu from "../../routes/BottomTabs";

const PaginaInicial = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const [refFlatList, setRefFlatList] = useState();

  useEffect(() => {
    getList();
    return () => {};
  }, []);

  const getList = () => {
    const fotos =
      "https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1";
    fetch(fotos)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => setIsLoading(false));
  };

  const onClickItem = (item, index) => {
    setCurrentIndex(index)
    const newArrData = data.map((e, index) => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: true,
        };
      }
      return {
        ...e,
        selected: false,
      };
    });
    setData(newArrData);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onClickItem(item, index)}
        style={[
          estilos.item,
          {
            width: 250,
            marginLeft: 14,
            marginTop: 11,
            height: 150,
            backgroundColor: item.selected ? COLORS.preto : COLORS.vermelhoClaro,
          },
        ]}
      >
        <Image style={estilos.imagem} source={{ url: item.url }} resizeMode='contain' />
      </TouchableOpacity>
    );
  };

  const getItemLayout = (data, index) => {
    return {length: 161, offset: 161 * index, index}
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Listagem Clinicas</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          getItemLayout = {getItemLayout}
          ref={(ref) => setRefFlatList(ref)}
        />
      )}
      <Menu/>
    </SafeAreaView>
  );

};



const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapButton: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    backgroundColor: COLORS.preto,
  },
  item: {
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 10,
    justifyContent: "center",
  },
  imagem: {
    width: 100,
    height: 100,
  },
});

export default PaginaInicial;
