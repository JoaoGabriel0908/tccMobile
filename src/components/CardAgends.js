import * as React from "react";
import { Avatar, Card, Title, Paragraph, Colors } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import COLORS from "../const/Colors";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import apiBlood from "../service/apiBlood";

const fundo = "../assets/fundo.png";

const LeftContent = (props) => (
  <Image style={estilos.hemocentro} source={require(fundo)} />
);

const CardAgends = ({ data }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);

  const deletarConsulta = () => {};

  console.log("Id do agendamento do doador " + data.id_agendamento_doador);

  return (
    <Card elevation={5} style={estilos.containerGeral}>
      <Card.Title
        style={estilos.container}
        title={data.nome_unidade}
        left={LeftContent}
      />
      <Card.Content>
        <Title>Tipo doação: {data.tipo_servico}</Title>
        <Paragraph>
          {data.logradouro}, {data.numero} - {data.cidade} - {data.uf},{" "}
          {data.cep}{" "}
        </Paragraph>
        <Paragraph>
          Compareça na data: {data.data_agendada_doador} ás {data.hora}
        </Paragraph>
      </Card.Content>
      <Card.Actions style={estilos.botoes}>
        <Button
          agendar
          title="Reagendar Consulta"
          onPress={() => {
            navigation.navigate("EditandoAgendamento", {
              id: data.id_agendamento_doador,
              idDoador: data.id_doador,
              idHemocentro: data.id,
            });
          }}
        />
        <Button
          agendar
          title="Cancelar Consulta"
          onPress={() => setModalVisible(true)}
        />
        <View>
          <TouchableOpacity style={estilos.container}>
            <Text style={estilos.texto} numberOfLines={1}>
              Sair
            </Text>
            <Icon name={"chevron-down"} style={estilos.icon} />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <Text>Olá</Text>
            <Button
              onPress={() => {
                apiBlood.delete(
                  `/DeleteConsultas/${data.id_agendamento_doador}`
                );
              }}
            />
          </Modal>
        </View>
      </Card.Actions>
    </Card>
  );
};

const estilos = StyleSheet.create({
  containerGeral: {
    width: 360,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 2,
    marginTop: 26,
  },
  container: {
    width: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  botoes: {
    alignContent: "center",
    // backgroundColor: COLORS.cinza,
    width: 300,
  },
  hemocentro: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default CardAgends;
