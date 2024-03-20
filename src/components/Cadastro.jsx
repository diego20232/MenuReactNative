import React, { useState } from "react";
import { StyleSheet, View, TextInput, Alert} from "react-native";
import { Button } from "react-native-paper";




export default () => {
    const [nome, setNome] = useState('');
    const [cadastro, setCadastro] = useState('');
    const [alterar, setAlterar] = useState('');
    const [excluir, setExcluir] = useState('');
    const [pesquisa, setPesquisar] = useState('');


    // const CliqueCadastro = () => {
    //    console.warn("cadastrado com sucesso");
    // }
    
    const cliqueAlterar = () => {
        console.warn("Cadastro alterado com sucesso")
    }
    
    const cliqueExcluir = () => {
        console.warn("Cadastro excluido")
    }

    const cliquePesquisar = () => {
        console.warn("buscando...")
    }


    const Nome = () => {
        if(!cadastro.trim()){
            console.warn(`Insira o nome de usario para prosseguir`)
        }else{
            console.warn(`Cadastro efetuado com sucesso ;) ${cadastro}`)
        }
    }



 






    return (
        <View>
            <TextInput style={Estilo.input} placeholder="nome" keyboardType="email-address" onChangeText={text => setCadastro(text)} value={cadastro} />
            <TextInput style={Estilo.input} placeholder="E-mail" keyboardType="email-address" />
            <TextInput style={{
                backgroundColor: 'white',
                borderColor: 'white',
                borderCurve: 'circular',
                borderWidth: 1,
                borderRadius: 20,
                marginTop: 20,
                width: 220,
            }} placeholder="Telefone" keyboardType="numeric" maxLength={20} />
            <TextInput style={{
                backgroundColor: 'white',
                borderColor: 'white',
                borderCurve: 'circular',
                borderWidth: 1,
                borderRadius: 20,
                marginTop: 20,

            }} placeholder="Endereço" keyboardType="email-address" />
            <TextInput style={{
                backgroundColor: 'white',
                borderColor: 'white',
                borderCurve: 'circular',
                borderWidth: 1,
                borderRadius: 20,
                marginTop: 20,
                width: 140,

            }} placeholder="numero" keyboardType="numeric" />
            <TextInput style={{
                backgroundColor: 'white',
                borderColor: 'white',
                borderCurve: 'circular',
                borderWidth: 1,
                borderRadius: 20,
                marginTop: -50,
                width: 180,
                marginLeft: 160,
            }} placeholder="CEP" keyboardType="numeric" />

            <TextInput style={Estilo.input} placeholder="Cidade" keyboardType="email-address"/>
            <TextInput style={Estilo.input} placeholder="Estado" keyboardType="email-address"/>

        
         
          <Button style={{
            backgroundColor: '#87CEEB',
            padding: 5,
            width: 180,
            marginTop: 10,
            borderRadius: 7,
            marginLeft: -18,
            
          }} buttonColor="#87CEEB" textColor="white" onPress={Nome} icon={require('../assents/fonts/homem.png')}>Cadastrar</Button>

<Button style={{
            backgroundColor: '#87CEEB',
            padding: 5,
            width: 180,
            marginTop: -48,
            borderRadius: 7,
            marginLeft: 178,
            
          }} buttonColor="#87CEEB" textColor="white" onPress={cliqueAlterar} icon={require('../assents/fonts/alterar.png')}>Alterar</Button>

<Button style={{
            backgroundColor: '#87CEEB',
            padding: 5,
            width: 180,
            marginTop: 10,
            borderRadius: 7,
            marginLeft: -18,
            
          }} buttonColor="#87CEEB" textColor="white" onPress={cliqueExcluir} icon={require('../assents/fonts/remover.png')}>Excluir</Button>

<Button style={{
            backgroundColor: '#87CEEB',
            padding: 5,
            width: 180,
            marginTop: -49,
            borderRadius: 7,
            marginLeft: 178,
            
          }} buttonColor="#87CEEB" textColor="white" onPress={cliquePesquisar} icon={require('../assents/fonts/search.png')}>Pesquisar</Button>
 
            






        </View>

    )
}


const Estilo = StyleSheet.create(
    {
        input: {
            backgroundColor: 'white',
            borderColor: 'white',
            marginTop: 20,
            borderCurve: 'circular',
            // borderBottomWidth: 1,
            borderWidth: 1,
            borderRadius: 20,
        }
    }
)


