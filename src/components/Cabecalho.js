import { View, Text } from 'react-native'
import React from 'react'

const Cabecalho = (props) => {
  return (
    <View style={{marginLeft: 15}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>{props.name}</Text>
    </View>
  )
}

export default Cabecalho