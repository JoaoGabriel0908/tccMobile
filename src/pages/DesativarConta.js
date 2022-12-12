import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../const/Colors";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Desativar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Button title="Desativar conta" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <View style={estilos.container}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Icon style={estilos.close} name="close-circle" />
          </TouchableOpacity>
          <View style={estilos.content}>
            <View style={estilos.containerTexto}>
              <Text style={estilos.texto}>
                Tem certeza que deseja desativar sua conta temporariamente?
              </Text>
            </View>
            <View style={estilos.circleExclamation}>
              <Icon name="exclamation-thick" style={estilos.iconExclamation} />
            </View>
            <View style={estilos.botoes}>
              <Button title="Cancelar" />
              <Button title="Desativar conta" />
            </View>
          </View>
        </View>
        <Icon />
      </Modal>
    </>
  );
};

const estilos = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.branco,
    flex: 1,
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

export default Desativar;



