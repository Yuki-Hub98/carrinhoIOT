import { StyleSheet,
Text,
SafeAreaView,
Image,
View, 
ScrollView,
FlatList} from 'react-native';

import  Topo  from './source/telas/Carrinho/Topo'; //Função topo é um componente
import Detalhes from './source/telas/Carrinho/Detalhes';//Função top é um componente 
import { useFonts, Montserrat_400Regular,Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Texto from './source/components/Texto';
import Mocks from "./source/mocks/carrinho";
import Item from './source/telas/Carrinho/Item';
// Formula para deixar a altura e largura padronizada Altura/Largura * width;
// De uma imagem
export default function App() {
 
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,Montserrat_700Bold
  });
  
  if(!fontsLoaded) return <View></View>
  
 
  return (
    <SafeAreaView style={styles.container}>

      <FlatList data={Mocks.itens.lista}
      renderItem={Item}
      keyExtractor={({nome})=> nome}
      ListHeaderComponent ={ () => {
        return <>
      <Topo {...Mocks.topo}/>
      <Detalhes {...Mocks.detalhes}/>
      
      <Texto style={styles.titulo}>
              {Mocks.itens.titulo}
      </Texto>
        
        
        
        </>

      }

      }
      

      ListFooterComponent={  ()=> {
        
        return <>
      <Texto style={styles.titulo}>
              {Mocks.itens2.titulo}
      </Texto>  
      <FlatList data={Mocks.itens2.lista}
      renderItem={Item}
      keyExtractor={({nome})=> nome} />
      
     


        </>


        }
      }

      />


      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  titulo:{
    color:"#ffa500",
    fontWeight:"bold",
    marginTop:30,
    marginBottom:30,
    fontSize:22
  }
 

});
