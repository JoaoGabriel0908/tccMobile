import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const fundo = "../assets/fundo.png";

const Layout = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <View style={estilos.containerForm}>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex:1
  },
  imagemFundo: {
    justifyContent: "flex-end",
    flex:3
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex:1,
    maxHeight:'80%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
})

export default Layout