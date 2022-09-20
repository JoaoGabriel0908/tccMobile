import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../const/Colors'

const Button = ({title, onPress}) => {
  return (
   <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
      <Text>{title}</Text>
      
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
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