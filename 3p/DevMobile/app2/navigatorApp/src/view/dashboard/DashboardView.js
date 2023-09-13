import { TouchableOpacity, Text, View } from "react-native";


const DashboardVIew = ({navigation}) =>{


    return (

        <View>
            <Text>DashBoard</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaInicial')}}>

            <Text>SAIR</Text>

            </TouchableOpacity>
        </View>
    )
}
export default DashboardVIew;