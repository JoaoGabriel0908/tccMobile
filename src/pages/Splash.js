import {Text, StyleSheet, View, Image, ImageBackground, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const fundo = '../assets/fundo.png'

const Splash = () => {
const navigation = useNavigation()
    return (
    <SafeAreaView style={estilos.container}>
        <ImageBackground style={estilos.imagemFundo} source={require(fundo)}>
        <Text style={estilos.text}>Bem-vindo</Text>   
        
        <TouchableOpacity style={estilos.button} activeOpacity={0.7} onPress={() => navigation.navigate('Cadastro')}>
        <Text>Cadastro</Text>
      
        </TouchableOpacity>
        </ImageBackground>
        
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',

    },
    text:{
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        alignItems: 'center',
        top: 300,
        color: '#fff'
    },
    imagemFundo:{
        width: '100%',
        height: '100%',
    },
        button: {
          height: 55,
            width:"100%",
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: "center",
            marginVertical: 20,
            borderWidth: .5,
            borderRadius: 10,
        }
})

export default Splash
