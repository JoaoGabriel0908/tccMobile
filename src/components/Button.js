import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../const/Colors'

const Button = ({title, onPress=(() => {})}) => {
  return (
    <>
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.texto}>{title}</Text>
      
   </TouchableOpacity>
   <TouchableOpacity style={styles.button01}>
     </TouchableOpacity>
    </>
   
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 55,
        width:"50%",
        backgroundColor: '#920707',
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20,
        borderWidth: .5,
        borderRadius: 10,
        borderColor: COLORS.vermelhoPrincipal,
    },
    texto:{
      color:COLORS.branco,
      fontSize:18,
    },
    button01:{
      left:200,
      top:-80,  

    }
})