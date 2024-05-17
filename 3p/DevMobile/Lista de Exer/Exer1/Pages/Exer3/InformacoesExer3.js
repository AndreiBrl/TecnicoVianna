import React, { useState } from "react";
import { useContexto } from '../Compartilhado'
import { View, Text } from "react-native";
const InformacoesExer3 = () => {
    const { horasTrab, salarioHora, dependentes } = useContexto();

    let salarioBruto = 0;
    let INSS = 0;
    let IR = 0;
    const calculo = () => {
        salarioBruto = salarioHora * horasTrab + (50 * dependentes);
        if (salarioBruto <= 1000) {
            INSS = salarioBruto * 0.085
        }
        if (salarioBruto > 1000) {
            INSS = salarioBruto * 0.09
        }
        if (salarioBruto > 500 && salarioBruto <= 1000) {
            IR = salarioBruto * 0.05
        }
        if (salarioBruto > 1000) {
            IR = salarioBruto * 0.07
        }
        salarioBruto = salarioBruto.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        IR = IR.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        INSS = INSS.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    calculo();

    console.log(horasTrab, salarioHora, dependentes);
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{fontSize:30}}>Informações sobre seu salário</Text>
            <Text style={{fontSize:20}}>Seu salário bruto é: {salarioBruto}</Text>
            <Text style={{fontSize:20}}>Seu INSS é: {INSS}</Text>
            <Text style={{fontSize:20}}>Seu Imposto de Renda é: {IR}</Text>
        </View>
    )

}
export default InformacoesExer3;