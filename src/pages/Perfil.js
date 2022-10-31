import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import InfoPerfil from '../components/InfoPerfil'
import DadosPerfil from '../components/DadosPerfil'
import COLORS from '../const/Colors'

const Perfil = () => {
  return (
    <ScrollView>
      <InfoPerfil
      nameComplet="Leonardo Vivi"
      nameGenres="Masculino"
      gender="gender-male"
      iconNameSangue="water"
      tipoSanguineo="AB+"/>
      <View>
        <DadosPerfil/>
      </View>
    </ScrollView>
  )
}

const estilos = StyleSheet.create({
  dadosPerfilContainer: {
    backgroundColor: COLORS.preto,
  },
  
})

export default Perfil