import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import COLORS from '../const/Colors'

const Cadastro = () => {
const fundo = '../assets/fundo.png'
  return (
    <View style={estilos.container}>
        <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <View style={estilos.cadastroContainer}>
          <Text style={estilos.text}>Bem-vindo</Text>
        </View>
        </ImageBackground>
    </View>
  )
}

const estilos = StyleSheet.create({
    container:{
        display:'flex'
    },
    text:{
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        alignItems: 'center',
        top:400
    },
    imagemFundo:{
        flex: 1,
        resizeMode:'cover'
    },
    cadastroContainer:{
        backgroundColor:COLORS.branco
    }
})

export default Cadastro