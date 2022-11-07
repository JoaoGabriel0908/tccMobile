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
import Button from "../components/Button"

const fundo = "../assets/fundo.png";
const hemocentroImagem = "../assets/Ellipse8.png";
const vazio = "../assets/vazio.png";
const meioCheio = "../assets/meio-cheio.png";
const cheio = "../assets/cheio.png";
const retangulo ="../assets/Rectangle42.png"
const patrocinio = "../assets/image2.png"
const patrocinio2 = "../assets/image4.png"

const Campanhas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const [refFlatList, setRefFlatList] = useState();

  useEffect(() => {
    getList();
    return () => { };
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
    const newArrData = data.map((e, index) => {
      if (item.id == e.id) {
        return {
          ...e,
          selected: true
        }
      }
      return {
        ...e,
        selected: false,
      }
    })
    setData(newArrData)
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onClickItem(item, index)}
        style={[
          estilos.item,
          { marginTop: 11, height: 150, backgroundColor: item.selected ? COLORS.preto : COLORS.branco },
        ]}
      >
        <Image style={estilos.imagem} source={{ url: item.url }} />
      </TouchableOpacity>
    );
  };

  const getItemLayout = (data, index) => {
    return { length: 161, offset: 161 * index, index };
  };

  return (
    <ScrollView style={estilos.container}>

      <View style={estilos.content}>
        <View style={estilos.containerNomeHemocentro}>
          <Text style={estilos.nomeHemocentro}>
            Fundação hemocentro de Brasília
          </Text>
          <View style={estilos.containerImagem}>
            <Image style={estilos.imagem} source={require(fundo)} />
          </View>
          <Text style={estilos.endereco}>
            Um herói não precisa usar capa, com uma doação voce pode se tornar um!
          </Text>
        </View>
        <View style={estilos.containerSobre}>
          <Text style={estilos.sobre}>Endereço</Text>
          <Text style={estilos.sobreDescricao}>
          Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade Universitária, Campinas - SP, 13083-878
          </Text>
        </View>
        <View style={estilos.containerHorario}>
          <Text style={estilos.horario}>Horário de atendimento</Text>
          <Text style={estilos.horarioDescricao}>
            Segunda a sexta das 8:00 às 17:00
          </Text>
          <Text style={estilos.horarioDescricaoFeriado}>
            Feriados e finais de semana das 08:00 às 13:00
          </Text>
        </View>
        <View style={estilos.containerServico}>
          <Text style={estilos.servico}>Detalhes</Text>
          <Text style={estilos.servicoDescricao}>
          O evento acontecerá para arrecadação de sangue do tipo AB+. Os três primeiros a realizarem a doação ganhará uma camiseta especial.
          </Text>
        </View>
        <View style={estilos.containerServico}>
          <Text style={estilos.estoque}>Galeria</Text>
        </View>
        {/* Estoque */}
        <View style={estilos.containerEstoque}>
          <Image source={require(retangulo)}/>
        </View>
        <View style={estilos.containerPatrocinio}>
          <Image source={require(patrocinio)} style={estilos.imagePatrocinio}/>
          <Image source={require(patrocinio2)} style={estilos.imagePatrocinio}/>
        </View>
      </View>
    </ScrollView>
  )
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImagem: {
    height: 250,
  },
  imagem: {
    height: "100%",
    position: "relative",
  },
  buttonImage: {
    position: "absolute",
    width: 200,
    left: 20,
  },
  imageHemocentro: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: COLORS.cinza,
    left: 20,
    position: "absolute",
    top: 210,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },

  containerSobre: {
    alignItems: "center",
    width: 360,
  },
  containerNomeHemocentro: {
    alignItems: "center",
    width: 360,
  },
  containerHorario: {
    alignItems: "center",
    width: 360,
  },
  containerServico: {
    alignItems: "center",
    width: 360,
  },
  containerEstoque: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.cinza,
    marginBottom: 30,
  },
  containerCampanhas: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

  },

  nomeHemocentro: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    marginTop: 50,
    marginBottom: 17,
    textAlign: "center",
    alignItems: 'center',

  },
  endereco: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    marginBottom: 25,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.cinza,
    marginTop: 25,
  },

  sobre: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  sobreDescricao: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginBottom: 25,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.cinza,
  },

  horario: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  horarioDescricaoFeriado: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginBottom: 25,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.cinza,
  },
  horarioDescricao: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },

  servico: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  servicoDescricao: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    marginBottom: 25,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.cinza,
  },

  estoque: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
  },
  contentEstoque: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  contentCampanha: {
    alignItems: "center",
    width: 360,
  },

  campanha: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },

  item: {
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 10,
    justifyContent: "center",
  },

  campanhaText: {
    marginTop: 20,
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    textAlign: "center",
  },
  titulo: {
    // fontWeight: "900",
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
  },
  imagemCampanha: {
    width: 100,
    height: 100,
  },
  containerPatrocinio:{
    flexDirection: 'column',
    marginBottom: 20,
    alignItems: 'center',
  },
  imagePatrocinio:{
    marginVertical: 50,
  }
});

export default Campanhas;
