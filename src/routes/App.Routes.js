import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "./pages/Home";
import Hemo from "./pages/Hemo";
import Conquistas from "./pages/Conquistas";
import Perfil from "./pages/Perfil";

const Tab = createMaterialBottomTabNavigator();

export default function routes(){
  return (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Hemo" component={Hemo} />
    <Tab.Screen name="Conquistas" component={Conquistas} />
    <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>
)}
