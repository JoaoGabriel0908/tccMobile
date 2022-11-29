
import{SafeAreaView, View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from "../const/Colors";
import React, {useState} from "react";

const CheckBox = ({options = [], onChange}) => {
const [selected, setSelected] = useState([]);    

function toggle(id){
  let index = selected.findIndex(i=> i === id);
  let arrSelecteds = [...selected]
  if(index !== -1){
    arrSelecteds.splice(index, 1);
  } else {
    arrSelecteds.push(id);
  }
  setSelected(arrSelecteds);
}
  return (
      <View>
          {options.map((op) =>(
        <View key={options} style={estilos.optionContainer}>
          
          <TouchableOpacity 
          style={estilos.touchble} 
          onPress={()=> toggle(op?.id)}>
            {selected.findIndex(i=>i === op.id) !== -1 ?  (
            <Icon name="check-bold" color={COLORS.preto} size={16} />
            ) : null}
            </TouchableOpacity>

          <Text style={estilos.optext}>{op?.text}</Text>      
          </View>
          ))}
          </View>
      );
    };
    const estilos = StyleSheet.create({
      container:{
        marginLeft:15,
      },
      optionContainer:{
        flexDirection: 'row',
        alignItems:'center',
      },
      touchble:{
        height: 20,
        width:20,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        borderColor:COLORS.preto,
        borderWidth:1,
        top:-100,
        left:40

      },
      optext:{
        marginLeft: 12,
        color:'#555',
        fontSize: 13,
        top:-100,
        left:40,
        fontWeight:'bold'
        
        
      }

    })

export default CheckBox