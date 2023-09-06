import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  
  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.texto}>IMC</Text>
      <img style={{width:"100vw"}} src="https://lucianaspina.com.br/wp-content/uploads/2018/05/IMC.jpg" alt="Descrição da Imagem" />
        
        
      </View>,
      <View style={styles.container2}>
      <Text style={{color:'black'}}>Nome</Text>
        <TextInput style={{borderColor:"gray",borderWidth:'1px', backgroundColor:'white' }}
        placeholder="Nome"
        />
        <Text style={{color:'black'}}>Altura</Text>
        <TextInput style={{borderColor:"gray",borderWidth:'1px', backgroundColor:'white' }}
        placeholder="Altura"
        />
        <Text style={{color:'black'}}>Peso</Text>
        <TextInput style={{borderColor:"gray",borderWidth:'1px', backgroundColor:'white' }}
        placeholder="Peso"
        />
        <Text>O valor </Text>
      
      </View>,
   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center',

  },
  container2: { 
    flex: 2,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 3,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  texto: {
    color: "gray",
    position:'absolute',
    fontSize:'20vw',
    

  }
});
