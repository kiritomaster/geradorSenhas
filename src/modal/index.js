import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable} from 'react-native'
import Slider from '@react-native-community/slider'
import * as clipboard from 'expo-clipboard'






export default function App() {

  

    
   


   return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.texto}>
            Senha gerada
        </Text>
        <Pressable style={styles.mostrasenha}>
            <Text style={styles.textoSenha}>
                {pass} */exibi a senha/*
            </Text>
        </Pressable>
        <View style={styles.}
        </View>
    </View>

 )}
   
 const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor: "rgba(24,24,24,0.6)"/*o termo a refere-se a opacidade */,
  justifyContent: 'center',
  alignItems: 'center'
  },
  logo:{
  marginBottom: 15
  },
  texto:{
    fontSize: 25,
    backgroundColor: "#2F8",
    fontWeight:'bold',
    fontFamily:'Roboto'
    },
    mostrasenha:{
        backgroundColor: "#2F8",
        fontWeight:'bold',
        fontFamily:'Roboto'
    },
    area:{
      marginTop: 14,
      justifyContent:'center',
      marginBottom:14,
      width: '70%',
      alignItems: 'center',
      backgroundColor:"#FFF",
      paddingBotton: 28,
      borderRadius:5,
      paddingTop: 24
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
          textoSenha:[
            color:'#FFF'
          ],
          areaBotoes:{
            flexDirection:'row',
            width:'90%',
            padding:'8',
            alignItems:'center',
            justifyContent:'space-between'
        
          },
          
          butoes:{
            backgroundColor:"#4b4",
            borderRadius:8,
            alignItems: 'center',
            padding:6,
            margin:5,
            alignItems:'center'
            },
            textoBotoes:{
            fontSize: 18,
            color: "#222"
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
   
