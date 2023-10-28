import React from "react"
import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {

    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>
                Lista de Exercícios
            </Text>
            <TouchableOpacity
                style={{ paddingTop: 10 }}
                onPress={() => {
                    navigation.navigate('Exer1')


                }}>
                <View>

                    <Text style={{ fontSize: 30, padding: 10, backgroundColor: "lightgray" }}>

                        Exer1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ paddingTop: 10 }}
                onPress={() => {
                    navigation.navigate('Exer2')


                }}>
                <View>

                    <Text style={{ fontSize: 30, padding: 10, backgroundColor: "lightgray" }}>

                        Exer2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Home;