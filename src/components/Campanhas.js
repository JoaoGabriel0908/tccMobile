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
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../const/Colors";

const Campanhas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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

  onClickItem = (item,index) => {
    const newArrData = data.map((e, index) =>{
      if(item.id == e.id){
        return{
          ...e,
          selected: true
        }
      }
      return{
        ...e,
        selected: false,
      }
    })
    setData(newArrData)
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onClickItem}
        style={[
          estilos.item,
          { marginTop: 11, height: 150, backgroundColor: item.selected ? COLORS.preto : COLORS.branco },
        ]}
      >
        <Image style={estilos.imagem} source={{ url: item.url }} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={estilos.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
      <TouchableOpacity>
        <ScrollView scrollEventThrottle={16}>
          <View
            style={{
              height: 200,
              marginTop: 20,
              backgroundColor: COLORS.preto,
            }}
          >
          </View>
        </ScrollView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    height: 150,
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
    height: 150,
  },
  imagem: {
    width: 100,
    height: 100,
  },
});

export default Campanhas;
