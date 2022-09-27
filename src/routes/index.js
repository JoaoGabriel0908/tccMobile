import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Terms from "../pages/Terms";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
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
    </Stack.Navigator>
  );
}
