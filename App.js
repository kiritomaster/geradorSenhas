import {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';

let alfabeto = "abcdefghijklmnopqrstuvxywzABDEFGHIJKLMNOPQRSTUVXYWZ0123456789!@#$%¨&*()"


export default function App() {

const [size,setSize] = useState(16)
const [senha, setSenha] = useState("")

function gerasenha(){
  let senha = ""
  for(i=0,n=alfabeto.length;i<size;i++){
    senha += alfabeto.charAt(Math.floor(Math.random() * n))
  }
  setSenha(senha)
  console.log(senha)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas</Text>
      <Text> {size} caracteres </Text>
        <slider 
          mininumValue = {6}
          maxinumValue = {20}
          maxinumTrackinTintColor = "#F00"
          mininumTrackinTintColor = "#0F0"

        <TouchableOpacity onPress={gerasenha}>
        <Text>
          Gerar Senha
        </Text>
      </TouchableOpacity>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight: 'bold',
    fontSize:30
  }
})
