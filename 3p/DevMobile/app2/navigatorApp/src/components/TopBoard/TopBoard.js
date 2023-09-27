import { View, StyleSheet, Image, Dimensions, Text, ImageBackground } from "react-native"

import { useFonts } from 'expo-font';
const TopBoard = () => {

    const [fontsLoaded] = useFonts({
        'cyberFont': require('../../../assets/fontes/cyberFont.ttf'),
        'doctor': require('../../../assets/fontes/doctor.otf')
    })

    const style = StyleSheet.create({
        containerTB: {
            flex: 1,
            alignItems: "center"
        }


    })
    if (!fontsLoaded) {

        return null
    }
    return (
        <View>

            {/* <Image source={cyber} style={style.imgTB}/>     */}



            <Text style={{ color: "#565656", marginLeft: 125, marginTop: 130, fontSize: 15, fontFamily: 'cyberFont', opacity: 1 }}>
                welcome to
            </Text>
            <View style={{ flexDirection: 'row',width:"100%", justifyContent:'center' }}>

                <Text style={{ color: "#B94432", fontSize: 50, fontFamily: 'cyberFont', opacity: 1 }}>
                    LORG  
                </Text>               
                 <Text style={{ color: "#565656", fontSize: 25, fontFamily: 'cyberFont', opacity: 1,paddingTop:25,marginLeft:5 }}>
                    city
                </Text>
            </View>



        </View>
    )
}

export default TopBoard;