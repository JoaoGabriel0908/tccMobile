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
import apiBlood from "../service/apiBlood";
import CardCampanha from "../components/CardCampanha";

const hemocentroImagem = "../assets/Ellipse8.png";
const vazio = "../assets/vazio.png";
const meioCheio = "../assets/meio-cheio.png";
const cheio = "../assets/cheio.png";
import { useNavigation } from "@react-navigation/native";

const PerfilHemo = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;

  const [hemocentro, setHemocentro] = useState([]);
  const [servico, setServico] = useState([]);
  const [estoque, setEstoque] = useState([]);
  const [campanha, setCampanha] = useState([]);

  console.log(id);

  useEffect(() => {
    apiBlood.get(`/listarHemocentroPorId/${id}`).then((hemocentro) => {
      setHemocentro(hemocentro.data[0][0]);
      console.log(hemocentro.data[0][0]);
    });
  }, []);

  useEffect(() => {
    apiBlood.get(`/ListarTipoServicoPorHemocentro/${id}`).then((data) => {
      console.log(data.data[0]);
      setServico(data.data[0]);
    });
  }, []);

  useEffect(() => {
    apiBlood.get(`/listarEstoqueSangue/${id}`).then((estoque) => {
      setEstoque(estoque.data[0]);
    });
  }, []);

  const [refFlatList, setRefFlatList] = useState();
  useEffect(() => {
    getList();
    return () => {};
  }, []);

  const getList = () => {
    apiBlood.get(`/listarCampanhas/${id}`).then((campanha) => {
      setCampanha(campanha.data);
      // console.log(campanha.data);
    });
  };

  const getItemLayout = (data, index) => {
    return { length: 161, offset: 161 * index, index };
  };

  return (
    <ScrollView style={estilos.container}>
      <View style={estilos.containerImagem}>
        <ImageBackground
          style={estilos.imagem}
          source={{ uri: hemocentro.foto_capa }}
        />
        <View style={estilos.buttonImage}>
          <Button
            title="Agendar"
            onPress={() => {
              navigation.navigate("TelaAgendamento", { id: id });
            }}
          />
        </View>
        <ImageBackground
          style={estilos.imageHemocentro}
          source={{ uri: hemocentro.foto_capa }}
        />
      </View>
      <View style={estilos.content}>
        <View style={estilos.containerNomeHemocentro}>
          <Text style={estilos.nomeHemocentro}>{hemocentro.nome_unidade}</Text>
          <Text style={estilos.endereco}>
            {hemocentro.logradouro} {hemocentro.numero} - {hemocentro.bairro},{" "}
            {hemocentro.cidade} - {hemocentro.estado}, {hemocentro.cep}
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
          <Text style={estilos.horarioDescricaoFeriado}>
            {hemocentro.horario_atendimento
              ? ""
              : "Segunda a sexta das 8:00 às 17:00"}
          </Text>
        </View>
        <View style={estilos.containerServico}>
          <Text style={estilos.servico}>Tipos de serviços</Text>
          <Text style={estilos.servicoDescricao}>
            {servico.map((servico) => servico.tipo_servico).join(" | ")}
          </Text>
        </View>
        <View style={estilos.containerServico}>
          <Text style={estilos.estoque}>Nosso estoque de sangue</Text>
        </View>
        {/* Estoque */}
        <View style={estilos.containerEstoque}>
          {estoque.map((estoque) => {
            if (estoque.nivel === "Alerta") {
              return (
                <View key={estoque.tipo_sanguineo} style={estilos.contentEstoque}>
                  <Image source={require(meioCheio)} />
                  <Text>
                    {estoque.tipo_sanguineo}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.vermelhoEscuro,
                      fontFamily: "Poppins_600SemiBold",
                    }}
                    
                  >
                    {estoque.nivel}
                  </Text>
                </View>
              );
            } else if (estoque.nivel === "Crítico") {
              return (
                <View key={estoque.tipo_sanguineo} style={estilos.contentEstoque}>
                  <Image source={require(vazio)} />
                  <Text>
                    {estoque.tipo_sanguineo}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.vermelhoEscuro,
                      fontFamily: "Poppins_700Bold",
                    }}
                    
                  >
                    {estoque.nivel}!
                  </Text>
                </View>
              );
            } else {
              return (
                <View key={estoque.tipo_sanguineo} style={estilos.contentEstoque}>
                  <Image source={require(cheio)} />
                  <Text>
                    {estoque.tipo_sanguineo}
                  </Text>
                  <Text
                    
                    style={{
                      color: COLORS.vermelhoEscuro,
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    {estoque.nivel}
                  </Text>
                </View>
              );
            }
          })}
        </View>
      </View>

      {/* Campanhas */}
      <ScrollView style={estilos.container}>
        <View style={estilos.containerCampanhas}>
          <View style={estilos.contentCampanha}>
            <Text style={estilos.campanhaText}>Campanhas</Text>
            <FlatList
              key={campanha.id}
              data={campanha}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({ item }) => <CardCampanha data={item} />}
              horizontal
              getItemLayout={getItemLayout}
              ref={(ref) => setRefFlatList(ref)}
            />
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
    width: 340,
    flexWrap: "wrap",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.vermelhoEscuro,
    borderRadius: 30,
    marginBottom: 30,
    justifyContent: "center",
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
    marginHorizontal: 5,
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
