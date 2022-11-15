import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import apiBlood from "../service/apiBlood";
import { ScrollView } from "react-native";
import CardHemo from "../components/CardHemo";

const PerfilHemo = "../assets/Ellipse3.png";

const Hemocentros = () => {
  const navigation = useNavigation();

  const [hemocentro, setHemocentro] = useState([]);

  useEffect(() => {
    apiBlood.get("/listarHemocentro").then((data) => {
      console.log(data.data[0]);
      setHemocentro(data.data[0]);
    });
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={estilos.container}>
        <View>
          <Text style={estilos.textTitle}></Text>
          <Input
            name={null}
            placeholder="Pesquise hemocentros perto de você"
            // value={inputs.nomeCompleto}
            iconName="magnify"
            // error={errors.nomeCompleto}
            onFocus={() => {
              handleErrors(null, "nomeCompleto");
            }}
            keyboardType="default"
            onChangeText={(text) => handleOnChange(text, "nomeCompleto")}
          />
        </View>
        {hemocentro.map((hemocentro) => (
          <CardHemo
            key={hemocentro.id}
            fotoHemo={
              "https://firebasestorage.googleapis.com/v0/b/blood---amedoar.appspot.com/o/images%2Fe0c81b4d-91aa-1317-d013-45abeccaf1ad?alt=media&token=da716070-6f4e-441d-94ff-beba15aa0e8d"
            }
            hemoNome={hemocentro.nome_unidade}
            logradouro={hemocentro.logradouro}
            estado={hemocentro.estado}
            cidade={hemocentro.cidade}
            cep={hemocentro.cep}
            bairro={hemocentro.bairro}
            numero={hemocentro.numero}
            onPress={() => {
              navigation.navigate("PerfilHemo", { id: hemocentro.id });
            }}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
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

export default Hemocentros;
