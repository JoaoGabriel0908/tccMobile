import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod'

const Login = () => {

    return (
    <View style={StyleSheet.container}>
        <View>
        <Image 
            source={require('../assets/fundo.png')}
            style={StyleSheet.fundo}
        />
        </View>
    </View>
  )
}


export default Login