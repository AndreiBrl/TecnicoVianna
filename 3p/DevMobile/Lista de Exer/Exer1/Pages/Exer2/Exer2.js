import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";


const Exer2 = () => {
    const [msg, setMsg] = useState("");
    const [idade, setIdade] = useState();
    const [tempo, setTempo] = useState();
    const calculaAposentadoria = () => {

        if (idade >= 65 && tempo >= 30) {
            setMsg("Qualificado")
        }
        else if (idade >= 60 && tempo >= 25) {
            setMsg("Qualificado")
        }
        else{
            setMsg("Não qualificado")
        }
    }

    const styles = StyleSheet.create({
        texto: {
            fontSize: 20,
            paddingBottom: 10

        },
        input: {
            width: 150,
            height: 40,
            backgroundColor: "lightgray",
            borderRadius: 5

        }

    })
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.texto}
            >
                Digite sua idade
            </Text>
            <TextInput style={styles.input}


                onChangeText={(text) => setIdade(text)}>

            </TextInput>
            <Text style={styles.texto}>
                Digite seu tempo de contribuição
            </Text>
            <TextInput onChangeText={(text)=>setTempo(text)} style={styles.input}>

            </TextInput>
            <TouchableOpacity onPress={calculaAposentadoria}>
                <Text style={{ padding: 20, marginTop: 10, backgroundColor: "lightgray", }}
                    >Verificar Aposentadoria</Text>
            </TouchableOpacity>
            <Text style={{color:"red"}}>{msg}</Text>
        </View>
    )
}
export default Exer2;