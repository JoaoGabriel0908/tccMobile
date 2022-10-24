import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import Button from "../components/Button";
import COLORS from "../const/Colors";

const Perfil = "../assets/Ellipse3.png";

const CardHemo = () => {
  return(
  <View style={estilos.containerText}>
    <Image style={estilos.image} source={require(Perfil)} />
    <View style={{ alignItems: "center" }}>
      <View style={estilos.tituloCor}>
        <Text style={estilos.titulo}>Hemocentro Campinas</Text>
      </View>
      <Text style={estilos.descricao}>
        Universidade Estadual de Campinas - R Carlos Chagas
      </Text>
      <View style={{ alignItems: "flex-end", width: 200, marginTop: 13 }}>
        <Button verMais title="Ver mais" />
      </View>
    </View>
  </View>
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
