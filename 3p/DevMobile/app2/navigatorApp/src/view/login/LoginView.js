import { Touchable } from "react-native"
import { TouchableOpacity, Text, View, StyleSheet } from "react-native"
import { Avatar, Button, TextInput } from "react-native-paper";


const LoginView = ({ navigation }) => {

    return (

        <View style={estilo.container}>

            <Avatar.Text  size={50} color={"yellow"} label="XD"
                style={estilo.logo}
            />
            <View style={estilo.body}>

                <TextInput style={estilo.login}
                    label="login"

                    placeholder="Informe o  login"
                />
                <TextInput style={{backgroundColor:"lightgray"}}
                    label="senha"
                    placeholder="Informe o  senha"
                    right={<TextInput.Icon icon="eye" />}
                />
                <Button style={estilo.enviar} icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
                    Enviar

                </Button>
            </View>
        </View>
    )
}
export default LoginView;

const estilo = StyleSheet.create({
    Avata:{
        width:50
    },
    container: {
        flex: 1,
        alignItems: "center",
        JustifyContent: "center"
    },
    logo: {
        flex: 0.25,
        top: 25
    },
    body: {
        flex: 3,
        justifyContent:"center"
    
    },
    login: {
        width: 200,
        marginTop: 50,
        backgroundColor:"lightgray"
    },
    enviar:{
        marginTop:50
    }

})