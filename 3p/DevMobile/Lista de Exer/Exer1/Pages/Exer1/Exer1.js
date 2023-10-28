import React from "react"
import { useState } from "react"
import { View, Text } from "react-native"
import Select from "react-select"
import makeAnimated from 'react-select/animated';
import { useContexto } from '../Compartilhado'

const Exer1 = ({ navigation }) => {
    const animatedComponents = makeAnimated();
    const [tipoCarro, setTipoCarro] = useState("");
    const [itensAdicionais, setItensAdicionais] = useState([]);
    const [potenciaEcolhida, setPotencia] = useState("");
    const [msg, setMsg] = useState("")
    const { pegaDado } = useContexto();
    const checaCampos = () => {

        if (tipoCarro != "" && potenciaEcolhida != "") {

            pegaDado(tipoCarro,itensAdicionais,potenciaEcolhida);
            navigation.navigate('Informacoes')

            setItensAdicionais("");
            setPotencia("");
            setTipoCarro("");
            setMsg("");
        } else {

            setMsg("Preencha os campos de carro e potencia");

        }
    }
    const itens = [
        { value: 'cambioAuto', label: 'Câmbio automático' },
        { value: 'vidroAuto', label: 'Vidro Automático' },
        { value: 'alarme', label: 'alarme' },
        { value: 'tetoSolar', label: 'Teto solar' },
        { value: 'kitMulti', label: 'Kit MultiMidia' },
        { value: 'Ar', label: 'Ar' }
    ]
    const carros = [
        { value: 'corolla', label: 'Corolla' },
        { value: 'gol', label: 'Gol' },
        { value: 'toro', label: 'Caminhote-Toro' }
    ]
    const potencia = [
        { value: '1.0', label: '1.0' },
        { value: '1.8', label: '1.8' },
        { value: '2.0', label: '2.9' }
    ]

    return (

        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30, marginBottom: 40 }}>Personalize seu Carro</Text>
            <View>

                <Text style={{ fontSize: 15 }}>Escolha seu carro</Text>

                <Select options={carros}

                    styles={{
                        control: (provided) => ({
                            ...provided,
                            width: 300,
                            minHeight: 40
                        }),

                    }}
                    onChange={setTipoCarro}
                    components={animatedComponents}
                    value={tipoCarro}
                    placeholder={"Carros"} />

                <Text style={{ fontSize: 15, marginTop: 20 }}>Selecione a potência desejada</Text>

                <Select options={potencia}

                    styles={{
                        control: (provided) => ({
                            ...provided,
                            width: 300,
                            minHeight: 40

                        }),
                    }}
                    onChange={setPotencia}
                    components={animatedComponents}
                    value={potenciaEcolhida}
                    placeholder={"Potência"}
                />
                <Text style={{ fontSize: 15, marginTop: 20 }}>Adicione itens ao seu carro</Text>

                <Select options={itens}

                    styles={{
                        control: (provided) => ({
                            ...provided,
                            width: 300,
                            minHeight: 40
                        }),
                    }}
                    components={animatedComponents}
                    placeholder={"Adicione"}
                    onChange={setItensAdicionais}
                    value={itensAdicionais}
                    isMulti />

                <Text style={{ color: "red" }}>{msg}</Text>


            </View>
            <Text style={{zIndex:"-1", backgroundColor: "gray", fontSize: 30, padding: 10, justifyContent: "center", borderRadius: 10, marginTop: 20 }}

                onPress={() => {
                    checaCampos();


                }}
            >Orçar</Text>
        </View>

    )


}
export default Exer1;