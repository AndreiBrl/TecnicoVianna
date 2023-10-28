import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useContexto } from "../Compartilhado";


const Informacoes = () => {
  const { carro, itensAdicionais, potenciaEscolhida, setItensAdicionais } = useContexto();
  let preco = 0;
  const calculaPreco = () => {
    if (carro.value == "corolla") {
      preco = 50000 + 50000 * 0.3
    }
    if (carro.value == "gol") {
      preco = 30000 + 30000 * 0.2
    }

    if (carro.value == "toro") {
      preco = 150000 + 150000 * 0.3
    }
    if (potenciaEscolhida == "1.0") {
      preco -= preco * 0.1
    }


    itensAdicionais.forEach(element => {
      if (element.value == "Ar") {
        preco += 3000

      }
      if (element.value == "cambioAuto") {
        preco += 5000

      }
      if (element.value == "alarme") {
        preco += 800

      }
      if (element.value == "tetoSolar") {
        preco += 4000

      }
      if (element.value == "kitMulti") {
        preco += 1800

      }
    });

  }
  calculaPreco();

  const styles = StyleSheet.create({
    titulo: {
      fontSize: 50,
      marginTop: 10

    },
    texto: {
      fontSize: 30,
      marginTop: 10

    }
  })
  const valorFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.titulo} >Dados:</Text>
      <View>

        <Text style={styles.texto} >Carro: {carro.label}</Text>
        <Text style={styles.texto}>Potência:{potenciaEscolhida.label}</Text>
        {itensAdicionais.map((element, index) => (
          <Text style={styles.texto} key={index}> - {element.label}</Text>
        ))}
        <Text style={styles.texto}>Preço final:{valorFormatado}</Text>
      </View>

    </View>
  );
};



export default Informacoes;
