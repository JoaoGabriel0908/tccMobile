import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import Button from '../components/Button'
import { AuthContext } from '../contexts/Contexts'

const Configuracao = () => {
  const {logout} = useContext(AuthContext)
  return (
    <Button onPress={() => {logout()}}>
      <Text>Sair</Text>
    </Button>
  )
}

export default Configuracao