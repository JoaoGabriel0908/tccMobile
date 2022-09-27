import React from "react";
import{SafeAreaView, View,StyleSheet, Text} from 'react-native';
import CheckBox from "react-native-check-box";


const CheckBox = () => {
    const optionsindividual = [{text:'Lembrar-me', id: 1}];
    return(
        <SafeAreaView style={estilos.container}>
           <CheckBox options={optionsindividual} onChange={(op)=> alert(op)}/>
        </SafeAreaView>
    );
}