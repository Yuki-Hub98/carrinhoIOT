//imagens do top
import topo from "../../assets/topo.png";
import logoVendedor from '../../assets/logo.png';
//Imagens dos itens 1
import antena2g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import nodeMcu from '../../assets/Itens/nodeMcu.png';
//Imagens dos itens 2
import sensorMovimento from '../../assets/Itens/sensorMovimento.jpg';
import sensorSom from '../../assets/Itens/sensorSom.png';
import Leds from '../../assets/Itens/Leds.jpg';
import kitArduino from '../../assets/Itens/kitArduino.jpg';

const carrinho={
topo:{
    titulo:"Carrinho",
    imagem:topo,
},
detalhes:{
    titulo:"Detalhes do Carrinho",
    tituloProduto:"Kit Iot",
    descricao:"Um kit IoT que revoluciona a vida do estudante",
    logoVendedor:logoVendedor,
    nomeVendedor:"Nuvem's Shopping",
    preco:"R$ 100,00"


},
itens:{
    titulo:"Itens do Carrinho",
    lista:[
        {
            nome:"antena2g3g",
            imagem:antena2g
            },
        {
            nome:"antenaWifi",
            imagem:antenaWifi
            },
        {
            nome:"modem",
            imagem:modem
            },
        {
            nome:"modemMcu",
            imagem:nodeMcu
            }


       ]



    },

    itens2:{
        titulo:"Itens adicionais",
        lista:[

            {
                nome:"Leds",
                imagem:Leds
                },
            {
                nome:"Sensor Movimento",
                imagem:sensorMovimento
                },
            {
                nome:"Sensor Som",
                imagem:sensorSom
                },
                {
                    nome:"Kit Arduino",
                    imagem:kitArduino
                    },



            
        ]

    }
}
export default carrinho;

