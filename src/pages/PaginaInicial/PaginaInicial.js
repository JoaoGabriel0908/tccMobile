import { View, Text } from 'react-native'
import React from 'react'
import Campanhas from './Campanhas'

const PaginaInicial = () => {
  return (
    <View>
      <Text>Campanhas para você</Text>
      <Campanhas/>
    </View>
  )
}

export default PaginaInicial