import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import InfoPerfil from "../components/InfoPerfil";
import DadosPerfil from "../components/DadosPerfil";
import COLORS from "../const/Colors";
import apiBlood from "../service/apiBlood";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/Contexts";

const Perfil = ({ route, key }) => {
  const [pessoa, setPessoa] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [sangue, setSangue] = useState([]);

  const { userInfo } = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    apiBlood.get(`/listarDoadorId/${userInfo.id}`).then((data) => {
      console.log(data.data);
      setPessoa(data.data);
    });
    apiBlood.get(`/listarCidadesPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0]);
      setCidade(data.data[0]);
    });
    apiBlood.get(`/listarSexoPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0][0]);
      setSexo(data.data[0][0]);
    });
    apiBlood.get(`/listarSanguePorUsuario/${userInfo.id}`).then((data) => {
      console.log(data.data[0][0]);
      setSangue(data.data[0][0]);
    });
    apiBlood.get(`/ListarConsultasPorId/${userInfo.id}`).then((data) => {
      console.log(data.data[0]);
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
          navigation.navigate("EditarPerfil");
        }}
      />
      <View>
        <DadosPerfil
          email={pessoa.email}
          celular={pessoa.telefone_doador}
          cidadesEscolhidas={cidade.map((cidade) => cidade.cidade).join(" | ")}
          data_nascimento={pessoa.data_nascimento}
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
