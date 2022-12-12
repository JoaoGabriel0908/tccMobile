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
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={estilos.containerModal}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon style={estilos.close} name="close-circle" />
              </TouchableOpacity>
              <View style={estilos.content}>
                <View style={estilos.containerTexto}>
                  <Text style={estilos.texto}>
                    Tem certeza que deseja cancelar sua consulta?
                  </Text>
                </View>
                <View style={estilos.circleExclamation}>
                  <Icon
                    name="exclamation-thick"
                    style={estilos.iconExclamation}
                  />
                </View>
                <View style={estilos.botoes}>
                  <Button title="Não, voltar" onPress={() => setModalVisible(false)}/>
                  <Button
                    title="Sim, cancelar"
                    onPress={() => {
                      apiBlood.delete(
                        `/DeleteConsultas/${data.id_agendamento_doador}`
                      );
                    }}
                  />
                </View>
              </View>
            </View>
            <Icon />
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
  containerModal: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.branco,
    flex: 1,
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
  icon: {
    fontSize: 20,
  },
  containerTexto: {
    flexDirection: "row",
  },
  texto: {
    color: "#555",
    fontSize: 24,
    textAlign: "center",
  },
  circleExclamation: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: COLORS.cinza,
  },
  iconExclamation: {
    fontSize: 60,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexWrap: "wrap",
  },
  botoes: {
    flexDirection: "row",
    alignItems: "center",
  },
  close: {
    fontSize: 60,
  },
});

export default CardAgends;
