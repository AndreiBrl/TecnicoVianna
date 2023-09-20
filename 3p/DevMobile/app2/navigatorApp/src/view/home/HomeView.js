import { Touchable } from "react-native"
import { TouchableOpacity, Text, View } from "react-native"
import TopBoard from "../../components/TopBoard/TopBoard"
import { IconButton } from "react-native-paper"


const HomeView = ({ navigation }) => {

    return (

        <View>
            {/* <Text>Home</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaLogin')}}>

                <Text> LOGAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaCadastro')}}>

<Text> CADASTRO</Text>
</TouchableOpacity> */}

            <TopBoard>

            </TopBoard>
            <View style={{flexDirection:"row"}}>
                <IconButton
                    icon="account-lock-outline"
                    containerColor="transparent"
                    iconColor="blue"
                    size={84}
                    onPress={() => navigation.navigate('telaLogin')}
                />
                <IconButton
                    icon="account-group"
                    containerColor="transparent"
                    iconColor="blue"
                    size={84}
                    onPress={() => navigation.navigate('telaCad')}
                    
                    />
                
            </View>

        </View>
    )
}
export default HomeView;