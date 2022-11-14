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
import PerfilHemo from "../pages/PerfilHemo";
import DesativarConta from "../pages/DesativarConta";
import Campanhas from "../components/Campanhas";

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
          options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerTitle: "Cadastro Doador",
          }}
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
            headerTitle: () => <Cabecalho name="Perfil" />,
            headerTitleAlign: "center",
            headerBackVisible: false,
            headerBackImageSource: "../assets/Combined-Shape.png",
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

        <Stack.Screen
          name="PerfilHemo"
          component={PerfilHemo}
          options={{
            headerTitle: () => <Cabecalho name="Hemocentro" />,
            headerTitleAlign: "center",
            headerBackVisible: false,
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
        {/* <Stack.Screen
          name="DesativarConta"
          component={DesativarConta}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Campanha"
          component={Campanhas}
          options={{
            headerTitle: () => <Cabecalho name="Campanha" />,
            headerTitleAlign: "center",
            headerBackVisible: false,
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
