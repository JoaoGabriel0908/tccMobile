import { View, Text } from "react-native";
import React from "react";

const Cidades = () => {
  const [cidades, setCidade] = useState([]);

  const [estados, setEstado] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState([]);

  useEffect(() => {
    apiEstados.get("/estados").then((data) => {
      // console.log(data);
      setEstado(data.data);
    });
  }, []);

  useEffect(() => {
    apiCidades.get(`/estados/${estadoSelecionado}/municipios`).then((data) => {
      // console.log(data);
      setCidade(data.data);
    });
  });

  const cadastrar = () => {
    try {
      const response = apiBlood.post('/cadastrarDoador', {
        nome_completo: inputs.nomeCompleto,
        email: inputs.email,
        id_cidade: inputs.cidadeDoacao,
        cpf: inputs.cpf,
        senha: inputs.senha,
        // confirmacaoSenha: inputs.confirmacaoSenha,
        id_sexo: inputs.sexo,
        id_tipo_sanguineo: inputs.tipo_sanguineo,
      });
    } catch (error) {
      error.response.data;
    }
  };

  return (
    <View>
      <Text>Cidades</Text>
    </View>
  );
};

export default Cidades;
