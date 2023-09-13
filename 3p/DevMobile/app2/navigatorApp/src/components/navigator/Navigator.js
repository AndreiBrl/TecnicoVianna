import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import TelaInicial from "../../view/home/HomeView"
import TelaLogin from "../../view/login/LoginView"
import TelaCadastro from "../../view/cadastro/CadastroView"
import TelaDashboard from "../../view/dashboard/DashboardView"
const Navigator = () =>{

    const Stack = createStackNavigator();
    return (

        <NavigationContainer>
            <Stack.Navigator inicialRouteName ="telaInicial">

                <Stack.Screen name="telaInicial" 
                component={TelaInicial}
                
                />
                <Stack.Screen name="telaLogin"
                component={TelaLogin}
                />
                <Stack.Screen name="telaCadastro"
                component={TelaCadastro}
                />
                <Stack.Screen name="telaDashboard"
                component={TelaDashboard}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default Navigator;