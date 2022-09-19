import {Text, StyleSheet, View, Image} from 'react-native'
import React from 'react'
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod'

const Splash = () => {

    return (
    <View style={estilos.container}>
         <Text style={estilos.text}>Bem-vindo</Text>
        <Image 
            source={require('../assets/fundo.png')}
            style={estilos.fundo}
        />
        
    </View>
  )
}

const estilos = StyleSheet.create({
    container:{
        paddingTop: 100,
        backgroundColor: '#fff'
    },
    text:{
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Splash