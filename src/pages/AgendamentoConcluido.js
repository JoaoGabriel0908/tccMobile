import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import CardAgends from "../components/CardAgends";

const Conquistas = () => {
  return (
    <View style={{height: '40%'}}>
      <CardAgends />
    </View>
  );
};

export default Conquistas;
