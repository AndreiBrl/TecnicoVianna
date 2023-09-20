import { View, StyleSheet, Image, Dimensions, Text, ImageBackground } from "react-native"
import cyber from "./img/cyber.jpg"

const TopBoard = () => {
    const widthTela= Dimensions.get('screen').width;

    const style = StyleSheet.create({
        containerTB: {
            flex: 1,
            alignItems: "center"
        },
        imgTB: {
            width: "100%",
            height:(500/478)*widthTela,
            opacity:0.8
            
        }

    })
    return (
        <View>

            {/* <Image source={cyber} style={style.imgTB}/>     */}
            <ImageBackground source={cyber} style={style.imgTB}>

                
            <Text style={{color:"white", textAlign:"center", marginTop:200}}>
                    BEM VINDO
                </Text>
            </ImageBackground>

        </View>
    )
}

export default TopBoard;