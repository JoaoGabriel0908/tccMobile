import { View,Image,TouchableOpacity, Text, SafeAreaView, StyleSheet } from "react-native";
import React, {useState} from "react";

const fundo = "../../assets/fundo.png";

const HemoPaginaInicial = () => {
  // const [hemocentro, setHemocentro] = useState({
  //   id: "",
  //   hemocentroNome: "",
  //   hemocentroEndereco: "",
  //   hemocentroFoto: "",
  // });

//   useEffect(() => {
//     apiLivraria.get(`/listarLivros/${cod_livro}`).then(livro => {
//       setLivro(livro.data[0]);
//     });
//   }, []);

  return (
    <SafeAreaView>
      <Text>Hemocentro Campinas</Text>
      <View>
        <Image source={require(fundo)} style={estilos.imagem}/>
        <TouchableOpacity>
            <Text>Ver mais</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  imagem:{
    width: 150,
    height: 150,
  }
})

export default HemoPaginaInicial;
