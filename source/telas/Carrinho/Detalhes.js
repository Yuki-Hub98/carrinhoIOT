import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';



import Texto from '../../components/Texto';

export default function Detalhes({titulo, tituloProduto, descricao, logoVendedor, nomeVendedor, preco}){
return<>
      <Texto style={styles.detalhe}>{titulo}</Texto>
      <Texto style={styles.titulo}>{tituloProduto}</Texto>

      <View style={styles.vendendor}>
      <Image style={styles.logoVendedor} source={logoVendedor}/>
      <Texto style={styles.nomeVendedor}>{nomeVendedor}</Texto>
     </View>

      <Texto style={styles.desc}>{descricao} </Texto>
      <Texto style={styles.preco}>{preco}</Texto>


</>
;    

}

const styles = StyleSheet.create({

    detalhe:{
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign:"center",
    
      },
      titulo:{
        color: "#ffa500",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign:"center"
      },
      nomeVendedor:{
        color: "#B0C4DE",
        fontSize: 18,
        lineHeight: 26,
        marginLeft:10
    
      },
      desc:{
        fontSize: 18,
        fontSize:20,
        paddingVertical:15
      },
      preco:{
        fontSize:35,
        fontWeight:"bold",
        textAlign:"right",
        paddingHorizontal:10
      },
     logoVendedor:{
        width: 30,
        height:30,
        marginLeft:5
      },
      vendendor:{
        flexDirection:"row",
        padding:10
      }


})