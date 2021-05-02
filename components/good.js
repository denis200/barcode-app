import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image,Animated, Touchable } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Good = (props)=>{
    const rightSwipe =(progress,dragX)=>{
        const scale = dragX.interpolate({
            inputRange: [0,100],
            outputRange:[0.9,0.6],
        })
        return(
            <TouchableOpacity onPress={props.handleDelete}>
                <View style = {styles.deleteBox}>
                    <Animated.Text style = {{transform:[{scale:scale}]}}>Удалить</Animated.Text>
                </View>
            </TouchableOpacity>
            
        )
    };
 return(
     <Swipeable 
        renderRightActions ={rightSwipe}
     >
         <View style ={{flexDirection:'row',marginTop:5}}>
         <Image source ={props.image} style ={styles.good}></Image>
         <View>
             <Text style = {{marginTop:4,fontSize: 18,marginLeft:20,}}>{props.name}</Text>
             <Text style = {{marginTop:10,marginLeft:20,fontSize:18,color: '#00aa00'}}>{props.price}</Text>
         </View>
         
     </View>
     </Swipeable>
     
 );
}
const styles = StyleSheet.create({
    good:{
      width: 80,
      height: 100,
      resizeMode: 'contain'
    },
    deleteBox:{
        backgroundColor:'#ff3300',
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:90,
     
    }
})
export default Good