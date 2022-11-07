import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import COLORS from "../const/Colors";
import Button from "../components/Button";

const fundo = "../assets/fundo.png";
const hemocentroImagem = "../assets/Ellipse8.png";
const vazio = "../assets/vazio.png";
const meioCheio = "../assets/meio-cheio.png";
const cheio = "../assets/cheio.png";

const PerfilHemo = () => {
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
      "https://jsonplaceholder.typicode.com/photos?_limit=4&_page=1";
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
            backgroundColor: item.selected
              ? COLORS.preto
              : COLORS.vermelhoClaro,
          },
        ]}
      >
        <View>
          <Image
            style={estilos.imagemCampanha}
            source={{ url: item.url }}
            resizeMode="contain"
          />
          <Text style={estilos.titulo}>Título da Campanha</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const getItemLayout = (data, index) => {
    return { length: 161, offset: 161 * index, index };
  };

  return (
    <ScrollView style={estilos.container}>
      <View style={estilos.containerImagem}>
        <ImageBackground style={estilos.imagem} source={require(fundo)} />
        <View style={estilos.buttonImage}>
          <Button title="Agendar" />
        </View>
        <ImageBackground
          style={estilos.imageHemocentro}
          source={require(hemocentroImagem)}
        />
      </View>
      <View style={estilos.content}>
        <View style={estilos.containerNomeHemocentro}>
          <Text style={estilos.nomeHemocentro}>
            Fundação hemocentro de Brasília
          </Text>
          <Text style={estilos.endereco}>
            Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade
            Universitária, Campinas - SP, 13083-878
          </Text>
        </View>
        <View style={estilos.containerSobre}>
          <Text style={estilos.sobre}>Sobre nós</Text>
          <Text style={estilos.sobreDescricao}>
            Seja bem-vindo ao nosso perfil. Atendemos via whats
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
          <Text style={estilos.servico}>Tipos de serviços</Text>
          <Text style={estilos.servicoDescricao}>
            Sangue | Plaqueta | Medula
          </Text>
        </View>
        <View style={estilos.containerServico}>
          <Text style={estilos.estoque}>Nosso estoque de sangue</Text>
        </View>
        {/* Estoque */}
        <View style={estilos.containerEstoque}>
          <View style={estilos.contentEstoque}>
            <Image source={require(vazio)} />
            <Text>AB+</Text>
          </View>
          <View style={estilos.contentEstoque}>
            <Image source={require(meioCheio)} />
            <Text>AB-</Text>
          </View>
          <View style={estilos.contentEstoque}>
            <Image source={require(vazio)} />
            <Text>A+</Text>
          </View>
          <View style={estilos.contentEstoque}>
            <Image source={require(cheio)} />
            <Text>A-</Text>
          </View>
          <View style={estilos.contentEstoque}>
            <Image source={require(cheio)} />
            <Text>B+</Text>
          </View>
          <View style={estilos.contentEstoque}>
            <Image source={require(meioCheio)} />
            <Text>B</Text>
          </View>
          <View style={estilos.contentEstoque}>
            <Image source={require(vazio)} />
            <Text>O+</Text>
          </View>
          <View style={estilos.contentEstoque}>
            <Image source={require(cheio)} />
            <Text>O-</Text>
          </View>
        </View>
      </View>
      {/* Campanhas */}
      <ScrollView style={estilos.container}>
        <View style={estilos.containerCampanhas}>
          <View style={estilos.contentCampanha}>
            <Text style={estilos.campanhaText}>Campanhas</Text>
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
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
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
    width: 360,
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
  },
  endereco: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    marginBottom: 25,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.cinza,
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
});

export default PerfilHemo;
