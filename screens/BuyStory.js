import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import Good from '../components/good';

const  Purchase = (props)=>{
  const [showList, setShowList] = useState(false)
  return(
    <View>
      <TouchableOpacity onPress={()=>{showList?setShowList(false):setShowList(true)}} style = {{borderWidth:2,borderColor:'#00aa00', paddingVertical:10,marginTop:20,marginHorizontal:30,borderRadius:14,}}>
        <Text style ={{textAlign:'center',fontSize:16}}>Покупка {props.date}  {props.time}</Text>
        {showList && props.goods.map(good => { return <Good name={good.name} price={good.price} image={good.image}></Good> })}
      </TouchableOpacity>
    </View>
  )}

export default function StoryScreen({ route, navigation }) {
    const PurchaseHistory = [{
      date: '01.05.2021',
      time:'18:50',
      goods:[{name:'Простоквашино',price:50,image:require('.././images/prosto.jpg') },
             {name:'Кукурузки Кузя',price:20,image:require('.././images/prosto.jpg')},
             {name:'Цикорий оригинальный',price:90,image:require('.././images/prosto.jpg')},
             {name:'Ванилин порошковый',price:23,image:require('.././images/prosto.jpg')},
             {name:'Чипсы Лейз',price:110,image:require('.././images/prosto.jpg')},
    ]},
    {
      date: '03.04.2020',
      time:'12:30',
      goods:[{name:'Вафли Яшкино',price:50,image:require('.././images/prosto.jpg') },
             {name:'Страпон Универсальный',price:140,image:require('.././images/prosto.jpg')},
             {name:'Яйца некрашенный',price:140,image:require('.././images/prosto.jpg')},
             {name:'Овсянка',price:140,image:require('.././images/prosto.jpg')},
             {name:'Целофановые пакеты',price:140,image:require('.././images/prosto.jpg')},
             {name:'Орбит без сахара',price:140,image:require('.././images/prosto.jpg')},
    ]}
  
  ]
    return(
        
        <View>
            <Text style ={{textAlign:'center',fontSize:24,marginTop:50,}}>История покупок:</Text>
            <ScrollView style = {{height:'88%',}}>
               {PurchaseHistory.map(purch => { return <Purchase date ={purch.date} time = {purch.time} goods = {purch.goods} ></Purchase> })}  
            </ScrollView>
            
        </View>

    )
}