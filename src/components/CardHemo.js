import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import COLORS from "../const/Colors";

const Perfil = "../assets/Ellipse3.png";

const CardHemo = ({
  onPress = () => {},
  hemoNome,
  logradouro,
  numero,
  bairro,
  cidade,
  estado,
  cep,
  fotoHemo,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={estilos.container}>
      <View style={estilos.containerText}>
        <Image style={estilos.image} source={{ uri: fotoHemo }} />
        <View style={{ alignItems: "center" }}>
          <View style={estilos.tituloCor}>
            <Text style={estilos.titulo}>{hemoNome}</Text>
          </View>
          <Text style={estilos.descricao}>
            {logradouro} {numero} - {bairro}, {cidade} - {estado}, {cep}
          </Text>
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
    width: 334,
    height: 140,
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
    fontSize: 14,
    width: 200,
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 20,
  },
  tituloCor: {
    backgroundColor: COLORS.vermelhoClaro,
    borderRadius: 5,
    width: 200,
  },
  titulo: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default CardHemo;
