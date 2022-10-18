import React from "react";
import { StatusBar} from 'react-native';
import showBottomTabs from "./src/routes/BottomTabs";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor='#AA1E1E' barStyle="ligh-content"/>
        <Routes/>
    </NavigationContainer>
  );
}