import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import InfoPerfil from "../components/InfoPerfil";
import DadosPerfil from "../components/DadosPerfil";
import COLORS from "../const/Colors";
import apiBlood from "../service/apiBlood";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/Contexts";
import CardAgends from "../components/CardAgends";

const Perfil = ({ route, key }) => {
  const [pessoa, setPessoa] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [sexo, setSexo] = useState([]);
  const [sangue, setSangue] = useState([]);
  const [consulta, setConsulta] = useState([]);
  const [cidadeResidente, setCidadeResidente] = useState([]);
  const [stop, setStop] = useState(false);

  const { userInfo } = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    apiBlood.get(`/listarCidadesPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0]);
      setCidade(data.data[0]);
    })
  }, []);

  useEffect(() => {
    apiBlood.get(`/listarSexoPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0][0]);
      setSexo(data.data[0][0]);
    });
  }, [])

  useEffect(() => {
    apiBlood.get(`/listarSanguePorUsuario/${userInfo.id}`).then((data) => {
      console.log(data.data[0][0]);
      setSangue(data.data[0][0]);
    });
  }, [])

  useEffect(() => {
    apiBlood.get(`/listarEnderecoDoador/${userInfo.id}`).then((data) => {
      console.log(`Cidade residente ${data.data}`);
      setCidadeResidente(data.data);
    });
  }, [])

  useEffect(() => {
    apiBlood.get(`/listarConsultaPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0]);
      setConsulta(data.data[0]);
    });
  }, []);

  let trazendoConclusao = setTimeout(() => {
    apiBlood.get(`/listarConsultaPorDoador/${userInfo.id}`).then((data) => {
      console.log(data.data[0]);
      setConsulta(data.data[0]);
      setStop(true);
    });
  }, 4000);
  if (stop === true) {
    clearTimeout(trazendoConclusao);
    console.log(stop);
  }

  useEffect(() => {
    apiBlood.get(`/listarDoadorId/${userInfo.id}`).then((data) => {
      console.log(data.data);
      setPessoa(data.data);
    });
  }, []);

  return (
    <ScrollView>
      <View>
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
      </View>
      <View>
        <DadosPerfil
          email={pessoa.email}
          celular={pessoa.telefone_doador}
          cidadesEscolhidas={cidade.map((cidade) => cidade.cidade).join(" | ")}
          data_nascimento={pessoa.data_nascimento}
        />
      </View>
      <View style={{ backgroundColor: COLORS.branco }}>
        <FlatList
          data={consulta}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <CardAgends data={item} />}
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
