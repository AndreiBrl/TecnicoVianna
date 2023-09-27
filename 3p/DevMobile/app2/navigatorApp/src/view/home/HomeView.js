import { Touchable } from "react-native"
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from "react-native"
import TopBoard from "../../components/TopBoard/TopBoard"
import { IconButton } from "react-native-paper"
import { ImageBackground } from "react-native"
import cyber from '../../../assets/img/bg.jpg'
import { useFonts } from "expo-font"
// import cyber from '../../components/TopBoard/img/cyber.jpg'


const HomeView = ({ navigation }) => {
    const [fontsLoaded] = useFonts({

        'doctor': require('../../../assets/fontes/doctor.otf')
    })
    if (!fontsLoaded) {

        return null
    }
    const style = StyleSheet.create({
        imgTB: {
            width: "100%",
            height: '160%',
            opacity:0.8


        },
        btn: {
            backgroundColor: '#B94432',
            width: 120,
            padding: 10,
            fontSize: 15,
            textAlign: 'left',
            marginTop: 5,
            borderRadius: 5,
            fontFamily: 'doctor',
            opacity:0.9

        }
    })

    return (

        <View>
            {/* <Text>Home</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaLogin')}}>

                <Text> LOGAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaCadastro')}}>

<Text> CADASTRO</Text>
</TouchableOpacity> */}

            <ImageBackground source={cyber} imageStyle={style.imgTB}>

                <TopBoard>

                </TopBoard>

                <View style={{ marginTop: 250, alignItems: 'center' }}>

                    <Text style={style.btn}

                        onPress={() => navigation.navigate('Login')}>
                        Login

                    </Text>
                    <Text style={style.btn}

                        onPress={() => navigation.navigate('Cadastro')}>
                        Cadastro

                    </Text>
                    {/* <IconButton
                        icon="account-lock-outline"
                        containerColor="transparent"
                        iconColor="#fcee0a"
                        size={84}
                    />
                    <IconButton
                        icon="account-group"
                        containerColor="transparent"
                        iconColor="#fcee0a"
                        size={84}
                        onPress={() => navigation.navigate('telaCad')}

                    /> */}

                </View>

            </ImageBackground>



        </View>
    )
}
export default HomeView;