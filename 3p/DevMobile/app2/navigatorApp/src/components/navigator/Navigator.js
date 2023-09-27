import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicial from "../../view/home/HomeView"
import TelaLogin from "../../view/login/LoginView"
import TelaCadastro from "../../view/cadastro/CadastroView"
import TelaDashboard from "../../view/dashboard/DashboardView"
const Navigator = () => {

    const Stack = createStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator inicialRouteName="telaInicial">
               
                <Stack.Screen name="Home"
                    component={TelaInicial} options={{ headerShown: false }}

                />
                <Stack.Screen name="Login"
                    component={TelaLogin}
                />

                <Stack.Screen name="telaDashboard"
                    component={TelaDashboard}
                />
                 <Stack.Screen name="Cadastro"
                    component={TelaCadastro}
                    options={{headerShown:false}}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Navigator;