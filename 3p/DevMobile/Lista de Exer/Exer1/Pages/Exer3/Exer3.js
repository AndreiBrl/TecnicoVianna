import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { useContexto } from "../Compartilhado";
import { TouchableOpacity } from "react-native-gesture-handler";
const Exer3 = ({ navigation }) => {
    const [horasTrab, setHorasTrab] = useState("");
    const [salarioHora, setSalarioHora] = useState("");
    const [dependentes, setDependentes] = useState("");
    const { dadosExer3 } = useContexto();
    const [msg, setMsg] = useState("");
    const styles = StyleSheet.create({
        texto: {
            marginBottom: 10,
            fontSize: 20

        },
        input: {
            marginBottom: 20,
            width: 150,
            height: 40,
            backgroundColor: "lightgray",
            borderRadius: 5,


        }

    })

    const checaCampos = () => {

        if (horasTrab != "" && salarioHora != "" && dependentes != "") {

            dadosExer3(horasTrab, salarioHora, dependentes)
            navigation.navigate("InformacoesExer3")
            setDependentes("")
            setHorasTrab("")
            setSalarioHora("")
            setMsg("")

        }
        else{
            setMsg("Preencha todos os campos")
        }
    }
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.texto}>Quantidade de horas Trabalhadas</Text>
            <TextInput style={styles.input}
                placeholder="..."
                onChangeText={(text) => setHorasTrab(text)}
                value={horasTrab}
            ></TextInput>
            <Text style={styles.texto}>Salário por hora</Text>
            <TextInput style={styles.input} placeholder="..."
             value={salarioHora}
                onChangeText={(text) => setSalarioHora(text)}></TextInput>
            <Text style={styles.texto}>Nº dependentes</Text>
            <TextInput style={styles.input}  value={dependentes} placeholder="..." onChangeText={(text) => setDependentes(text)}></TextInput>
            <Text style={{color:"red"}}>{msg}</Text>
            <Text style={{ zIndex: "-1", backgroundColor: "gray", fontSize: 30, padding: 10, justifyContent: "center", borderRadius: 10, marginTop: 20 }}


                onPress={() => {

                    checaCampos();


                }}
            >Calcula</Text>

        </View>
    )
}
export default Exer3;