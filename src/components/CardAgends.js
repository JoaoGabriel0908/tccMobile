import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Colors } from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
  } from "react-native";
import COLORS from '../const/Colors';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const fundo = "../assets/fundo.png";

const CardAgends = () => (
  <Card style={estilos.containerGeral}>
    <Card.Title style={estilos.container} title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={require(fundo)} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const estilos = StyleSheet.create({
    containerGeral: {

    },
    container:{
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CardAgends