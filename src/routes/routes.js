import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Terms from "../pages/Terms";
import Cabecalho from "../components/Cabecalho";
import Perfil from "../pages/Perfil";
import Hemocentros from "../pages/Hemocentros";
import Conquistas from "../pages/Conquistas";
import Menu from "./BottomTabs";
import EditarPerfil from "../pages/EditarPerfil";

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
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Hemocentros"
          component={Hemocentros}
          options={{
            title: "Hemocentros",
            headerBackVisible: true,
            headerBackTitle: "Login",
          }}
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

        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          options={{
            headerTitle: () => <Cabecalho name="Perfil"/>,
            headerTitleAlign: "center",
            headerBackImageSource: '../assets/Combined-Shape.png',
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
      </Stack.Navigator>
    </>
  );
}
