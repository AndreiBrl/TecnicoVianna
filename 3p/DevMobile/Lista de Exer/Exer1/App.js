import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';
import { Compartilhado } from './Pages/Compartilhado';

export default function App() {
  return (
    <Compartilhado>

      <Navigator />

    </Compartilhado>
  );
}


