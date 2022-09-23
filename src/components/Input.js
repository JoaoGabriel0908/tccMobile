import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import COLORS from "../const/Colors";
 
// Função que representa um componente
const Input = ({label, iconName, error, onFocus = () => {}, ...props}) => {
  return (
    <View style={estilos.formContainer}>
      <Text style={estilos.inputLabel}>{label}</Text>

        {/* Quando adicionamos [] podemos colocar mais de uma classe */}
      <View style={[estilos.inputContainer , {borderColor: error ? COLORS.vermelhoEscuro : COLORS.preto}]}>
      <Icon name={iconName} style={estilos.icon}/>
        <TextInput
          style={estilos.TextInput}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
          }}
          {...props}
        />
      </View>

      <Text>{error}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  formContainer: {
    marginBottom: 40,
    flex:1,   
    alignItems:"center"
  },
  inputLabel: {
    marginVertical: 5,
    fontSize: 15,
    color: COLORS.branco,
    opacity:.5, 
  },
  inputContainer: {
    
    width:334,
    height: 55,
    backgroundColor: COLORS.branco,
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius:15,
    
  },
  TextInput: {
    color: COLORS.preto,
    flex: 1,
    marginLeft:10
  },
  icon:{
    color:COLORS.vermelhoPrincipal,
    opacity:.5,
    fontSize:30,
  }
});

export default Input;