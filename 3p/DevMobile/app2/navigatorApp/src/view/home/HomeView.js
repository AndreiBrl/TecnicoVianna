import { Touchable } from "react-native"
import { TouchableOpacity, Text, View, StyleSheet, Dimensions } from "react-native"
import TopBoard from "../../components/TopBoard/TopBoard"
import { IconButton } from "react-native-paper"
import { ImageBackground } from "react-native"
import cyber from '../../components/TopBoard/img/cyber.jpg'


const HomeView = ({ navigation }) => {
    const widthTela = Dimensions.get('screen').width;
    const style = StyleSheet.create({
        imgTB: {
            width: "100%",
            height: '100%',
            opacity: 0.8

        },
        btn: {
            backgroundColor: '#fcee0a',
            width:120,
            padding:10,
            fontSize:20,
            textAlign:'left',
            marginTop:5,
            borderRadius:5
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

            <ImageBackground source={cyber} style={style.imgTB}>

                <TopBoard>

                </TopBoard>

                <View style={{ marginTop: 300, alignItems:'center' }}>

                    <Text style={style.btn}

                        onPress={() => navigation.navigate('telaLogin')}>
                        Login

                    </Text>
                    <Text style={style.btn}

                        onPress={() => navigation.navigate('telaCad')}>
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