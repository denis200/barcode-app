import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View ,ImageBackground,Image} from 'react-native';


export default function StoryScreen({ route, navigation }) {
    
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    fetch('https://qrcodeback.azurewebsites.net/api/Test?QR=4600819351681')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setName(data.name)
      setPrice(data.price)
    });
    
    return(
        
        <View>
            <Text style ={{textAlign:'center',marginTop:200,}}>Name is {name}</Text>
            <Text style ={{textAlign:'center',}}>Price is {price}</Text>
        </View>

    )
}