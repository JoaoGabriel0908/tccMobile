import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import COLORS from "../const/Colors";

const Perfil = "../assets/Ellipse3.png";

const CardHemo = ({ onPress = () => {}, hemoNome, logradouro, numero, bairro, cidade, estado, cep, fotoHemo }) => {
  return (
    <TouchableOpacity onPress={onPress} style={estilos.containerText}>
      <Image style={estilos.image} source={{uri: fotoHemo}} />
      <View style={{ alignItems: "center" }}>
        <View style={estilos.tituloCor}>
          <Text style={estilos.titulo}>{hemoNome}</Text>
        </View>
        <Text style={estilos.descricao}>
          {logradouro} {numero} - {bairro}, {cidade} - {estado}, {cep}
        </Text>
        <View style={{ alignItems: "flex-end", width: 200, marginTop: 13 }}>
        </View>
      </View>
    </TouchableOpacity>
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

export default CardHemo;
