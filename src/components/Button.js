import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Button = () => {
  return (
   <TouchableOpacity style={styles.button}>
      <Text>Cadastrar</Text>
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({

    button: {
      backgroundColor: '#ddd',
      with: 350,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      
    }



})