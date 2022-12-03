import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import InfoPerfil from "../components/InfoPerfil";
import DadosPerfil from "../components/DadosPerfil";
import COLORS from "../const/Colors";
import apiBlood from "../service/apiBlood";
import { useNavigation } from "@react-navigation/native";

const Perfil = ({ route, key }) => {
  const [pessoa, setPessoa] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [sangue, setSangue] = useState([]);

  const { id } = route.params;

  console.log(route.params);

  const navigation = useNavigation();

  useEffect(() => {
    apiBlood.get(`/listarDoadorId/${id}`).then((data) => {
      console.log(data.data);
      setPessoa(data.data);
    });

    
  }, []);

  useEffect(() => {
    apiBlood.get(`/listarCidadesPorDoador/${id}`).then((data) => {
      console.log(data.data[0]);
      setCidade(data.data[0]);
    });
  }, []);

  useEffect(() => {
    apiBlood.get(`/listarSexoPorDoador/${id}`).then((data) => {
      console.log(data.data[0][0]);
      setSexo(data.data[0][0]);
    });
  }, []);

  useEffect(() => {
    apiBlood.get(`/listarSanguePorUsuario/${id}`).then((data) => {
      console.log(data.data[0][0]);
      setSangue(data.data[0][0]);
    });
  }, []);

  return (
    <ScrollView>
      <InfoPerfil
        nameComplet={pessoa.nome_completo}
        nameGenres={sexo.sexo}
        gender={sexo.sexo === "Feminino" ? "gender-female" : "gender-male"}
        iconNameSangue="water"
        tipoSanguineo={sangue.tipo_sanguineo}
        onPress={() => {
          navigation.navigate("EditarPerfil", {id: pessoa.id});
        }}
      />
      <View>
        <DadosPerfil
          email={pessoa.email}
          celular={pessoa.telefone_doador}
          cidadesEscolhidas={cidade.map((cidade) => cidade.cidade).join(" | ")}
        />
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  dadosPerfilContainer: {
    backgroundColor: COLORS.preto,
  },
});

export default Perfil;
