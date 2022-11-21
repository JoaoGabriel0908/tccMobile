import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Conquistas from "../pages/Conquistas";
import PaginaInicial from "../pages/PaginaInicial";
import Hemocentros from "../pages/Hemocentros";
import Perfil from "../pages/Perfil";
import COLORS from "../const/Colors";
import Cabecalho from "../components/Cabecalho";
import EditarPerfil from "../pages/EditarPerfil";
import PerfilHemo from "../pages/PerfilHemo";
import apiBlood from "../service/apiBlood";

const { Navigator, Screen } = createBottomTabNavigator();
const logo = "../assets/cuidados-de-saude(3)1.png";

export default function Menu({ route, navigation }) {
  const { id } = route.params;

  const [pessoa, setPessoa] = useState({
    id: "",
    nome_completo: "",
    email: "",
    data_nascimento: "",
    telefone_doador: "",
  });

  console.log(id);

  useEffect(() => {
    apiBlood.get("/listarUsuario").then((data) => {
      console.log(data.data);
      setPessoa(data.data);
    });
  }, []);

  console.log(pessoa);

  return (
    <Navigator initialRouteName="Pagina Inicial">
      <Screen
        name="Pagina Inicial"
        component={PaginaInicial}
        options={{
          headerTitle: () => <Cabecalho name="Pagina Inicial" />,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="home"
                size={40}
                color={focused ? COLORS.vermelhoPrincipal : COLORS.preto}
              />
            </>
          ),
        }}
      />
      <Screen
        name="Hemocentro"
        component={Hemocentros}
        options={{
          headerTitle: () => <Cabecalho name="Hemocentros" />,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="view-list-outline"
                size={40}
                color={focused ? COLORS.vermelhoPrincipal : COLORS.preto}
              />
            </>
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        initialParams={{id}}
        options={{
          headerTitle: () => <Cabecalho name="Perfil" />,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="account"
                size={40}
                color={focused ? COLORS.vermelhoPrincipal : COLORS.preto}
              />
            </>
          ),
        }}
      />
      <Screen
        name="Configurações"
        component={Conquistas}
        options={{
          headerTitle: () => <Cabecalho name="Configurações" />,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <>
              <Icon
                name="cog"
                size={40}
                color={focused ? COLORS.vermelhoPrincipal : COLORS.preto}
              />
            </>
          ),
        }}
      />
    </Navigator>
  );
}
