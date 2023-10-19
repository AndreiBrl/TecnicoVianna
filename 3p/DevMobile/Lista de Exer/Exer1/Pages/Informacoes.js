import React from "react";
import { View, Text } from "react-native";

const Informacoes = (p) => {

    const props = p.tipoCarro;
  return (
    <View style={{alignItems:"center"}}>
      <Text >{props}</Text>
    </View>
  );
};



export default Informacoes;
