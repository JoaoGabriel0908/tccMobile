import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const CardCampanha = () => {
  return (
    <View style={{ backgroundColor: COLORS.cinza }}>
      <TouchableOpacity
        onPress={() => onClickItem(item, index)}
        style={estilos.item}
      >
        <View>
          <Image
            style={estilos.imagem}
            source={{ uri: props.data.foto_capa }}
            resizeMode="contain"
          />
          <Text style={estilos.titulo}>{props.data.nome}</Text>
          <Text style={estilos.descricao}>
            {campanha.data_inicio} - {campanha.data_termino}
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
});

export default CardCampanha;
