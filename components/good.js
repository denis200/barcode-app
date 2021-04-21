import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';

const Good = (props)=>{
 return(
     <View style ={{flexDirection:'row',marginTop:5,borderWidth:1,borderRadius:20,marginHorizontal:2,paddingHorizontal:3,}}>
         <Image source ={props.image} style ={styles.good}></Image>
         <View>
             <Text style = {{marginTop:4,fontSize: 18,marginLeft:20,}}>{props.name}</Text>
             <Text style = {{marginTop:10,marginLeft:20,fontSize:18,color: '#00aa00'}}>{props.price}</Text>
         </View>
         
         
     </View>
 );
}
const styles = StyleSheet.create({
    good:{
      width: 80,
      height: 100,
      resizeMode: 'contain'
    },
})
export default Good