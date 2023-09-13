import { Touchable } from "react-native"
import { TouchableOpacity, Text, View } from "react-native"


const HomeView = ({navigation}) =>{

    return (

        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaLogin')}}>

                <Text> LOGAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaCadastro')}}>

<Text> CADASTRO</Text>
</TouchableOpacity>

        </View>
    )
}
export default HomeView;