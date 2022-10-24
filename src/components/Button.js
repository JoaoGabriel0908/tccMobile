import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../const/Colors";

const Button = ({ title, onPress = () => {}, ...props }) => {
    const stylesButton = [styles.button];
    if (props.back) stylesButton.push(styles.buttonBack);
    if (props.login) stylesButton.push(styles.buttonLogin);
    if (props.register) stylesButton.push(styles.buttonRegister);
    if (props.verMais) stylesButton.push(styles.verMais);
    
    const stylesText = [styles.texto];
    if (props.textBack) stylesText.push(styles.textBack);
    return (
        <>
            <TouchableOpacity
                style={stylesButton}
                activeOpacity={0.7}
                onPress={onPress}
            >
                <Text style={stylesText}>{title}</Text>
            </TouchableOpacity>
        </>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        height: 55,
        width: "50%",
        backgroundColor: COLORS.vermelhoEscuro2,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: COLORS.vermelhoPrincipal,
    },
    buttonBack: {
        backgroundColor: "#E49E9E40",
        color: COLORS.vermelhoEscuro2,
        borderColor: "#E49E9E40",
        marginRight: '5%',
    },
    buttonLogin: {
      backgroundColor: COLORS.branco,
      color: COLORS.vermelhoClaro,
      borderColor: COLORS.vermelhoClaro,
      height: 80,
      borderTopEndRadius: 0,
      borderTopStartRadius: 40,
      borderBottomEndRadius: 0,
      borderBottomStartRadius: 0,
    },
    buttonRegister: {
      backgroundColor: COLORS.vermelhoEscuro,
      color: COLORS.branco,
      borderColor: COLORS.vermelhoEscuro,
      height: 80,
      borderTopEndRadius: 40,
      borderTopStartRadius: 0,
      borderBottomEndRadius: 0,
      borderBottomStartRadius: 0,
    },
    texto: {
        color: COLORS.branco,
        fontSize: 18,
    },
    textBack: {
        color: COLORS.vermelhoPrincipal,
    },
    verMais: {
        backgroundColor: COLORS.vermelhoPrincipal,
        height: 40,
        marginTop: 0,
        marginBottom: 2,
        
    }
});
