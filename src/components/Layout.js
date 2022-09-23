import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from "../const/Colors";


const fundo = "../assets/fundo.png";

export default function Layout(props) {
  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <View style={estilos.containerForm}>
          {props.children}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex:1,
    alignContent:'center',
    height:'100%',
  },
  imagemFundo: {
    justifyContent: "flex-end",
    flex:3
  },
  containerForm: {
    backgroundColor: COLORS.branco,
    justifyContent:"flex-start",
    height:'80%',
    maxHeight:'100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
})
