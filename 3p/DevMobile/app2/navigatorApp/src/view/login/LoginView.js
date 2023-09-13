import { Touchable } from "react-native"
import { TouchableOpacity, Text, View } from "react-native"


const LoginView = ({navigation}) =>{

    return (

        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaInicial')
            }}>
                <Text>Voltar</Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaDashboard')
            }}>
                <Text>DashBoard</Text>

            </TouchableOpacity>

        </View>
    )
}
export default LoginView;