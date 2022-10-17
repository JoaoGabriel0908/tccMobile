import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Home, PerfilTela, ConquistasTela, HemocentrosTela } from './routes'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Conquistas from "../pages/Conquistas"
import Hemocentros from "../pages/Hemocentros";
import Perfil from "../pages/Perfil";

const Tab = createBottomTabNavigator()

export default function showBottomTabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='HomeTab' component={Home}/>
            <Tab.Screen name='Hemocentros' component={HemocentrosTela}/>
            <Tab.Screen name='Conquistas' component={ConquistasTela}/>
            <Tab.Screen name='Perfil' component={PerfilTela}/>
        </Tab.Navigator>
    )
}