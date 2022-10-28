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

const { width } = Dimensions.get("window");

const Select = ({ option, onChangeSelect, text, renderItem, data, keyExtractor= () => {}}) => {
  const [txt, setTxt] = useState(text);
  const [modalVisible, setModalVisible] = useState(false);

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
              <FlatList style={estilos.list} keyExtractor={() => {}} renderItem={renderItem} data={data}/>
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
    fontSize: 20,
  },
  texto: {
    color: "#555",
    fontSize: 16,
  },
});

export default Select;
