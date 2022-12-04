import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { Button } from 'react-native-paper'
import { AuthContext } from '../contexts/Contexts'

const Configuracao = () => {
  const {logout} = useContext(AuthContext)
  return (
    <TouchableOpacity onPress={() => {logout()}}>
      <Text>Configuracao</Text>
      <Button onPress={() => {logout()}}/> 
    </TouchableOpacity>
  )
}

export default Configuracao