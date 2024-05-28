import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import Slider from '@react-native-community/slider'


let alfabeto = "abcdefghijklmnopqrstuvxywzABDEFGHIJKLMNOPQRSTUVXYWZ0123456789!@#$%¨&*()";


export default function App() {

  const [size, setSize] = useState(10)
  const [senha, setSenha] = useState("")

  function gerasenha(){
    let senha = "";
    for(i=0,n=alfabeto.length;i<size;i++){
    senha += alfabeto.charAt(Math.floor(Math.random() * n))
    }
    setSenha(senha)
   }
   


   return (
    <View style={styles.container}>
      <Image
      source = {require("./assets/react.png")}
      style={styles.logo}
      />
      <Text style={styles.title}>Mega Encrypt</Text>
      <Text style={styles.title2}> {size} caracteres</Text>
      <View style={styles.area}>
        <Slider style={styles.area}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor="#FF0000"
        minimumTrackTintColor="#0F0"
        thumbTintColor="#00F"
        onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={gerasenha}>
      <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
 )}
   
 const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor: "#777",
  justifyContent: 'center',
  alignItems: 'center'
  },
  logo:{
  marginBottom: 15
  },
  title:{
    fontSize: 40,
    backgroundColor: "#2F8",
    padding:10,
    borderRadius: 13
    },
    title2:{
    fontSize:30,
    marginTop:14
    },
    area:{
      marginTop: 14,
      marginBottom:14,
      width: '70%',
      alignItems: 'center',
      backgroundColor:"#FFF",
      borderRadius:5,
      padding: 8
      },
      area:{
        marginTop: 14,
        marginBottom:14,
        width: '70%',
        alignItems: 'center',
        backgroundColor:"#FFF",
        borderRadius:5,
        padding: 8
        },
        area:{
          marginTop: 14,
          marginBottom:14,
          width: '70%',
          alignItems: 'center',
          backgroundColor:"#FFF",
          borderRadius:5,
          padding: 8
          },
          button:{
            backgroundColor:"#FFF",
            borderRadius:15,
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%',
            height: 50,
            backgroundColor:"#2F8"
            },
            textButton:{
            fontSize: 24,
            color: "#000"
           
           }
           }) 
   
