import * as React from 'react';
import { Button,StyleSheet, View, Text ,TouchableOpacity,Icon} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';


export default function ProfileScreen({ navigation }) {
    return (
        <View style = {{}}>
            <View style = {{flexDirection:'row',marginTop:65}}>
                <View style ={{marginLeft:30}}>
                <Avatar
                    size="large"
                    rounded
                    title="Д"
                    titleStyle ={{color:'#000'}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    avatarStyle = {{borderColor:'#00aa00',borderWidth:2,}}
                    
                />
                </View>
                <View>
                    <Text style= {{fontSize:30,marginLeft:20,}}>Денис</Text>
                    <Text style= {{fontSize:20,marginLeft:20,color:'#00aa00'}}>soundze@mail.ru</Text>
                </View> 
            </View>
            <View style = {{marginTop:40,}}>
                <TouchableOpacity style ={{borderTopColor:'#ddd',borderTopWidth:2,borderBottomColor:'#ddd',borderBottomWidth:2,paddingVertical:10,}}>
                    <Text style = {{textAlign:'center',fontSize:25}}>Пункт меню 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={{borderTopColor:'#ddd',borderTopWidth:2,borderBottomColor:'#ddd',borderBottomWidth:2,paddingVertical:10,marginTop:10,}}>
                    <Text style = {{textAlign:'center',fontSize:25}}>Пункт меню 2</Text>
                </TouchableOpacity>
                
            </View>
            
            
            
        </View>
    )}