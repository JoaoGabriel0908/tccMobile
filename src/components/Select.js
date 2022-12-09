import {
  View,
  Text,
  Modal,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../const/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "./Input";

const { width } = Dimensions.get("window");

const Select = ({
  options,
  onChangeSelect,
  text,
  renderItem,
  data,
  value,
  onChangeText = () => {},
  keyExtractor = () => {},
  onPress = () => {},
}) => {
  const [txt, setTxt] = useState(text);
  const [modalVisible, setModalVisible] = useState(false);

  function search(pesquisa) {
    data.filter((d) => d.cidade.includes(pesquisa));
  }

  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: COLORS.vermelhoClaro,
        height: 1,
        width: '50%'
      }}
    />
  );

  return (
    <View>
      <TouchableOpacity
        style={estilos.container}
        onPress={() => setModalVisible(true)}
      >
        <Text style={estilos.texto} numberOfLines={1}>
          {txt}
        </Text>
        <Icon name={"chevron-down"} style={estilos.icon} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView>
          <View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="chevron-left" style={estilos.icon} />
            </TouchableOpacity>
            <Text>{text}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <Input
              placeholder={"Pesquise sua cidade"}
              value={value}
              onChangeText={onChangeText}
            />
            <FlatList
              ItemSeparatorComponent={renderSeparator}
              style={estilos.list}
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              options={options}
            />
            <View style={estilos.wrapButton}>
              <TouchableOpacity style={estilos.button} onPress={onPress}>
                <Text>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.branco,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 20,
  },
  texto: {
    color: "#555",
    fontSize: 16,
  },
  list: {
    height: "80%",
    padding: 8,
    paddingBottom: 20,
  },
  wrapButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },
  button: {
    padding: 16,
    backgroundColor: COLORS.vermelhoClaro,
  },
});

export default Select;
