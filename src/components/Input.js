import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../const/Colors";
import TextInputMask from "react-native-masked-text";

// Função que representa um componente
const Input = (
  { label, iconName, error, value, onFocus = () => {}, keyboardType, name, maxLength, onBlur = () => {}, ...props}
  ) => {
    const stylesMargin = [estilos.formContainer];
    if (props.inputPequeno) stylesMargin.push(estilos.inputPequeno);

    const stylesText = [estilos.inputLabel];
    if (props.textPequeno) stylesText.push(estilos.textPequeno);

    const stylesEditar = [estilos.inputContainer];
    if (props.EditarPerfil) stylesEditar.push(estilos.EditarPerfil);

  return (
    <View style={stylesMargin}>
      <Text style={stylesText}>{label}</Text>

      {/* Quando adicionamos [] podemos colocar mais de uma classe */}
      <View
        style={[
          stylesEditar,
          { borderColor: error ? COLORS.vermelhoEscuro : COLORS.preto },
        ]}
      >
        <TouchableOpacity onPress={() => setPasswordShown(!passwordShown)}>
          <Icon name={iconName} style={estilos.icon} />
        </TouchableOpacity>
        <TextInput
          onBlur={() => {
            onBlur()
            }}
          style={estilos.TextInput}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
          }}
          name={name}
          {...props}
          value={value}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
      </View>
        
      <Text>{error}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  formContainer: {
    marginBottom: 40,
    flex: 1,
    alignItems: "center",
  },
  inputPequeno:{
    marginBottom: 80,
    backgroundColor: COLORS.preto,
    height: 0,
  },
  textPequeno: {
    marginVertical: 0,
    backgroundColor: COLORS.vermelhoClaro2,
  },
  inputLabel: {
    marginVertical: 5,
    fontSize: 15,
    color: COLORS.branco,
    opacity: 0.5,
  },
  inputContainer: {
    width: 334,
    height: 55,
    backgroundColor: COLORS.branco,
    flexDirection: "row",
    borderWidth: 1,
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  TextInput: {
    color: COLORS.preto,
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    color: COLORS.vermelhoPrincipal,
    opacity: 0.5,
    fontSize: 30,
  },
  EditarPerfil:{
   
    
  }
  
});

export default Input;
