import React from "react"
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from "react-native"

import Placar from "./src/components/Placar.js";

const estilo = StyleSheet.create({
  tela: {
    backgroundColor: "#03001C",
    flex: 1,
  }
})

export default function App() {
  return <View style={ estilo.tela }> 
    <StatusBar barStyle="light-content" backgroundColor="#03001C" />
    <Placar titulo="CASA" />
    <Placar titulo="VISITANTE" />
  </View>

}

