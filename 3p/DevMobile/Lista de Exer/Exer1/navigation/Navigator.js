import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../Pages/Home';
import Informacoes from '../Pages/Informacoes';

const Navigator = () =>{

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator inicialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Informacoes" component={Informacoes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigator;
