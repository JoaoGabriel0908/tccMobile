import * as React from 'react';
import { Avatar, Card, Title, Paragraph, Colors } from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
    Image
  } from "react-native";
import COLORS from '../const/Colors';
import Button from './Button';

const fundo = "../assets/fundo.png";

const LeftContent = props => <Image style={estilos.hemocentro} source={require(fundo)} />

const CardAgends = () => (
  <Card elevation={5} style={estilos.containerGeral}>
    <Card.Title style={estilos.container} title="Nome hemocentro" left={LeftContent} />
    <Card.Content>
      <Title>Tipo doação: Sangue</Title>
      <Paragraph>Endereço hemocentro</Paragraph>
      <Paragraph>Compareça na data: 14/09/2022 13:50</Paragraph>
    </Card.Content>
    <Card.Actions style={estilos.botoes}>
      <Button agendar title='Reagendar Consulta'/>
      <Button agendar title='Cancelar Consulta'/>
    </Card.Actions>
  </Card>
);

const estilos = StyleSheet.create({
    containerGeral: {
      borderColor: COLORS.cinza,
      width: 360,
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      marginTop: 26,
    },
    container:{
        width: 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botoes:{
      alignContent: 'center',
      // backgroundColor: COLORS.cinza,
      width: 300,
    },
    hemocentro:{
      height: 50,
      width: 50,
      borderRadius: 50,
    }
})

export default CardAgends