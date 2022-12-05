import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import COLORS from "../const/Colors";
import { useNavigation } from "@react-navigation/native";

const CardCampanha = ({data}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Campanha", { id: data.id_unidade_hemocentro})
        }}
        style={estilos.item}
      >
        <View>
          <Image
            style={estilos.imagem}
            source={{ uri: data.foto_capa }}
            resizeMode="contain"
          />
          <Text style={estilos.titulo}>{data.nome}</Text>
          <Text style={estilos.descricao}>
            {data.data_inicio} - {data.data_termino}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 10,
    justifyContent: "center",
    width: 250,
    marginRight: 40,
    marginVertical: 25,
    height: 200,
    backgroundColor: COLORS.vermelhoClaro,
  },
  imagem: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
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
});

export default CardCampanha;
