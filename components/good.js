import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Good = (props)=>{
 return(
     <View style ={{flexDirection:'row',marginTop:5}}>
         <Image source ={props.image} style ={styles.good}></Image>
         <View>
             <Text style = {{marginTop:4,fontSize: 18,marginLeft:20,}}>{props.name}</Text>
             <Text style = {{marginTop:10,marginLeft:20,fontSize:18,color: '#00aa00'}}>{props.price}</Text>
         </View>
         <View style = {{flex:3 }}>
             <Ionicons style = {{alignSelf:'flex-end'}} name={'trash-outline'} size = {25} />
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