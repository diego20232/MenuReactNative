import React, {useState} from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import Cadastro from "./components/Cadastro";



export default () => {
    return (
        <View style={[App.geral, App.fundo]}>
            <Image source={require('./imagens/cadastro.png')} style={App.logo}/>
            <Text style={App.fonte}>Cadastro de Clientes!</Text>
            <Cadastro/>
        </View>
    )
}

const App = StyleSheet.create(
    {
        fonte: {
            fontWeight: 'bold',
            fontFamily: 'Arial',
            fontSize: 20,
            color: 'black',
            marginLeft: 150,
            marginTop: -60
        },
        logo: {
        //  padding: 'auto',
         marginTop: 200,
         marginLeft: 40,

        },
        geral: {
        padding: 30,
        display: 'flex',
        textAlign: 'center',
        marginTop: -180,
        },
        fundo: {
            flex: 1,
            backgroundColor: '#B0E0E6',
        },
    }
)