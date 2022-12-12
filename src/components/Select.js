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

  return (
    <View>
      <TouchableOpacity
        style={estilos.container}
        onPress={() => setModalVisible(true)}
      >
        <Text style={estilos.texto} numberOfLines={1}>
          {txt}
        </Text>

      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView>
          <View style={estilos.headerModal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="chevron-left" style={estilos.icon} />
            </TouchableOpacity>
            <Text style={estilos.modalTitle}>{text}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={estilos.modalCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>

          <Input
            placeholder={"Pesquise sua cidade"}
            value={value}
            onChangeText={onChangeText}
          />
          <FlatList
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
    fontSize: 30,
  },
  modalTitle:{
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
  list: {
    height: "70%",
    padding: 8,
    paddingBottom: 20,
    marginTop: 20,
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
  headerModal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: COLORS.preto,
    borderBottomWidth: .5,
    height: '8%',
  },
  modalCancel:{
    fontSize: 14,
    color: COLORS.vermelhoPrincipal,
    fontFamily: 'Poppins_700Bold',
  }
});

export default Select;
