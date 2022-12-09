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
import { useNavigation } from "@react-navigation/native";

const Perfil = "../assets/Ellipse3.png";

const CardHemo = ({ data }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PerfilHemo", { id: data.id_unidade_hemocentro });
        }}
        style={estilos.botao}
      >
        <View style={estilos.containerText}>
          <Image style={estilos.image} source={{ uri: data.foto_capa }} />
          <View style={{ alignItems: "center" }}>
            <View style={estilos.tituloCor}>
              <Text style={estilos.titulo}>{data.nome_unidade}</Text>
            </View>
            <Text style={estilos.descricao}>
              {data.logradouro} {data.numero} - {data.bairro}, {data.cidade} -{" "}
              {data.estado}, {data.cep}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  botao: {
    alignItems: "center",
    width: 330,
  },
  containerText: {
    height: 140,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 30,
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
