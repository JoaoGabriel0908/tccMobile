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
import Campanhas from "../components/Campanhas";
import COLORS from "../const/Colors";
import Menu from "../routes/BottomTabs";
import HemoPaginaInicial from "../components/HemoPaginaInicial";

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
  const fotos = "https://jsonplaceholder.typicode.com/photos?_limit=4&_page=1";
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
  setCurrentIndex(index);
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
      marginRight: 40,
      marginVertical: 25,
      height: 200,
      backgroundColor: item.selected ? COLORS.preto : COLORS.vermelhoClaro,
     },
    ]}
   >
    <View>
     <Image
      style={estilos.imagem}
      source={{ url: item.url }}
      resizeMode="contain"
     />
     <Text style={estilos.titulo}>Título da Campanha</Text>
     <Text style={estilos.descricao}>
      A solidariedade corre nas suas veias. Doe sangue!
     </Text>
    </View>
   </TouchableOpacity>
  );
 };

 const getItemLayout = (data, index) => {
  return { length: 161, offset: 161 * index, index };
 };

 return (
  <ScrollView style={estilos.containerPagina}>
   <ScrollView style={estilos.container}>
    <Text style={estilos.campanhaText}>Campanhas para você</Text>
    {isLoading ? (
     <ActivityIndicator />
    ) : (
     <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.id}`}
      horizontal
      getItemLayout={getItemLayout}
      ref={(ref) => setRefFlatList(ref)}
     />
    )}
   </ScrollView>
   <SafeAreaView style={estilos.hemocentro}>
    <Text style={estilos.campanhaText}>Hemocentros perto de você</Text>
    <HemoPaginaInicial/>
    <HemoPaginaInicial/>
    <HemoPaginaInicial/>
    <HemoPaginaInicial/>
   </SafeAreaView>
  </ScrollView>
 );
};

const estilos = StyleSheet.create({
 containerPagina: {
  paddingHorizontal: 30
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
 titulo: {
  fontWeight: "900",
  fontSize: 16,
 },
 descricao: {
  fontSize: 16,
  fontWeight: "500",
  textAlign: "justify",
 },
 campanhaText: {
  marginTop: 20,
  fontWeight: "600",
  fontSize: 20,
  color: COLORS.vermelhoEscuro2,
 },

});

export default PaginaInicial;
