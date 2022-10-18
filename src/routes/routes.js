import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Terms from "../pages/Terms";
import PaginaInicial from "../pages/PaginaInicial/PaginaInicial";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import Perfil from "../pages/Perfil";
import Hemocentros from "../pages/Hemocentros";
import Conquistas from "../pages/Conquistas";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PaginaInicial"
          component={PaginaInicial}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Hemocentros"
          component={Hemocentros}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Conquistas"
          component={Conquistas}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
