import { TouchableOpacity, Text, View } from "react-native"


const CadastroView = ({navigation}) =>{


    return (

        <View>
            <Text>Cadastro</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaInicial')}}>

            <Text>SAIR</Text>

            </TouchableOpacity>
        </View>
    )
}
export default CadastroView;