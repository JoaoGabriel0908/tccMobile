import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import InfoPerfil from '../components/InfoPerfil'
import DadosPerfil from '../components/DadosPerfil'
import COLORS from '../const/Colors'
import apiBlood from '../service/apiBlood'

const Perfil = ({route, key}) => {
  const [pessoa, setPessoa] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState();

  const {id} = route.params

  // console.log(route.params)

  useEffect(() => {
    apiBlood.get(`/listarDoadorId/${id}`).then(data => {
      console.log(data.data);
      setPessoa(data.data);
    });
  }, []);

  console.log(id)

  // useEffect(() => {
  //   buscarCidades(id_estado);
  //   console.log(cidades);
  // }, [inputs.id_estado]);

  return (
    <ScrollView>
      <InfoPerfil
      nameComplet="Leonardo Vivi"
      nameGenres="Masculino"
      gender="gender-male"
      iconNameSangue="water"
      tipoSanguineo="AB+"/>
      <View>
        <DadosPerfil
        email={pessoa.email}
        celular={pessoa.telefone_doador}
        />
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