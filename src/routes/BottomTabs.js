import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Menu() {
  const navigation = useNavigation();

    return(
        <View>
            <Button onPress={() => {navigation.navigate("PaginaInicial")}}/>
            <Button onPress={() => {navigation.navigate('Hemocentros')}}/>
            <Button onPress={() => {navigation.navigate('Conquistas')}}/>
            <Button onPress={() => {navigation.navigate('Perfil')}}/>
        </View>
    )
}