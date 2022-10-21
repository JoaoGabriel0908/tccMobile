import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Conquistas from "../pages/Conquistas";
import PaginaInicial from "../pages/PaginaInicial/PaginaInicial";
import Hemocentros from "../pages/Hemocentros";
import Perfil from "../pages/Perfil";
import COLORS from "../const/Colors";
import Cabecalho from "../components/Cabecalho";

const {Navigator, Screen} = createBottomTabNavigator();
const logo = "../assets/cuidados-de-saude(3)1.png";

export default function Menu() {

    return(
        <Navigator>
            <Screen name="PaginaInicial" 
            component={PaginaInicial}
            options={{
                headerTitle: () => <Cabecalho name='PaginaInicial'/>,
                headerTitleAlign: "center",
                tabBarIcon: ({focused}) => (
                    <>
                        <Icon 
                        name="home"
                        size={40}
                        color={focused ? COLORS.vermelhoPrincipal : COLORS.preto}
                        />
                    </>
                )
            }}/>
            <Screen name="Hemocentro" component={Hemocentros} 
            options={{
                headerTitle: () => <Cabecalho name='Hemocentro'/>,
                headerTitleAlign: "center",
                tabBarIcon: ({focused}) => (
                    <>
                        <Icon 
                        name="view-list-outline"
                        size={40}
                        color={focused ? COLORS.vermelhoPrincipal : COLORS.preto}
                        />
                    </>
                )
            }}/>
            <Screen name="Conquistas" component={Conquistas}
            options={{
                headerTitle: () => <Cabecalho name='Conquistas'/>,
                headerTitleAlign: "center",
                tabBarIcon: ({focused}) => (
                    <>
                        <Icon 
                        name="seal"
                        size={40}
                        color={focused ? COLORS.vermelhoPrincipal : COLORS.preto}
                        />
                    </>
                )
            }}/>
            <Screen name="Perfil" component={Perfil}
            options={{
                headerTitle: () => <Cabecalho name='Perfil'/>,
                headerTitleAlign: "center",
                tabBarIcon: ({focused}) => (
                    <>
                        <Icon 
                        name="account"
                        size={40}
                        color={focused ? COLORS.vermelhoPrincipal : COLORS.preto}
                        />
                    </>
                )
            }}/>
        </Navigator>
    )
}