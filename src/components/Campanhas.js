import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../const/Colors";
import Button from "./Button";
import apiBlood from "../service/apiBlood";

const Campanhas = ({ route }) => {
  const { id } = route.params;

  const [campanha, setCampanha] = useState([

  ]);

  useEffect(() => {
    apiBlood.get(`/listarCampanhas/${id}`).then((campanha) => {
      setCampanha(campanha.data[0]);
      console.log(campanha.data[0]);
    });
  }, []);

  return (
    <ScrollView style={estilos.container}>
      <View style={estilos.content}>
        <View style={estilos.containerNomeHemocentro}>
          <Text style={estilos.nomeHemocentro}>{campanha.nome}</Text>
          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={{uri: campanha.foto_capa}}
            />
          </View>
          <Text style={estilos.endereco}>
            Um herói não precisa usar capa, com uma doação voce pode se tornar
            um!
          </Text>
        </View>
        <View style={estilos.containerSobre}>
          <Text style={estilos.sobre}>Endereço</Text>
          <Text style={estilos.sobreDescricao}>
            {campanha.logradouro}, {campanha.numero} - {campanha.bairro},{" "}
            {campanha.cidade} - {campanha.estado}, {campanha.cep}  {campanha.ponto_referencia}
          </Text>
        </View>
        <View style={estilos.containerHorario}>
          <Text style={estilos.horario}>Horário de atendimento</Text>
          <Text style={estilos.horarioDescricaoFeriado}>
            Horário inicio {campanha.hora_inicio} - Horário término{" "}
            {campanha.hora_termino}
          </Text>
        </View>
        <View style={estilos.containerServico}>
          <Text style={estilos.servico}>Detalhes</Text>
          <Text style={estilos.servicoDescricao}>
            {campanha.descricao}
          </Text>
        </View>
      </View>
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
    width: 250, height: 250
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
    alignItems: "center",
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
  containerPatrocinio: {
    flexDirection: "column",
    marginBottom: 20,
    alignItems: "center",
  },
  imagePatrocinio: {
    marginVertical: 50,
  },
});

export default Campanhas;
