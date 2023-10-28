import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Exer1 from '../Pages/Exer1/Exer1';
import Exer2 from '../Pages/Exer2/Exer2';
import Exer3 from "../Pages/Exer3/Exer3";
import Informacoes from '../Pages/Exer1/Informacoes';
import Home from "../Pages/Home";

const Navigator = () => {

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator inicialRouteName="Exer3">
                <Stack.Screen name="Exer3" component={Exer3} />
                <Stack.Screen name="Exer2" component={Exer2} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Exer1" component={Exer1} />
                <Stack.Screen name="Informacoes" component={Informacoes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigator;
