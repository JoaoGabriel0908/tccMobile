import React from "react";
import { StatusBar, View, Text} from 'react-native';
import showBottomTabs from "./src/routes/BottomTabs";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/routes";
import { fonts, fontsToImport } from "./src/assets";
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import { AuthProvider } from "./src/contexts/Contexts";
import AppNav from "./src/routes/AppNav";

export default function App() {

  let [fontsLoaded] = useFonts(fontsToImport);

  if (!fontsLoaded) return <View><Text>App is loading...</Text></View> // TODO : add splash screen
  
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}