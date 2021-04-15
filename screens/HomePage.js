import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image} from 'react-native';




export default function HomeScreen({ navigation }) {
  return (
    
    <View >
      <ImageBackground  source = {require('.././images/bgmain.jpg')} style={styles.imgBackground} resizeMode='cover' >
        <View style = {{marginTop:'150%'}}>
         <Text onPress={()=>{navigation.navigate('Login')}}style={styles.button}>Вход</Text>
          <Text style={styles.orText}>или</Text>
          <Text onPress={()=>{navigation.navigate('Reg')}}style={styles.button}>Регистрация</Text>
          
        </View>
        
      </ImageBackground>
    </View>
   
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
},
  button:{
    marginTop:10,
    textAlign:'center',
    borderWidth:2,
    color:'#fff',
    backgroundColor:'#00aa00',
    borderColor:'#00aa00',
    paddingVertical:7,
    borderRadius:17,
    marginHorizontal:30,
    fontSize:22,
  },
  orText:{
    textAlign:"center",
    fontSize: 20,
    marginTop:10,
    color:'#fff'
  },
  buttons: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 600,
    
    
  },
  upperBut:{
    marginBottom:10,
  },
  lowerBut:{
    marginTop:10,
  },
});
