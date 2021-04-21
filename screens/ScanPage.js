import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScanScreen({route,navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text,setText] = useState()
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
 

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    
    alert(`Ваш штрихкод: ${data}. Тип штрихкода - ${type}`);
   setText(data);
  };

  if (hasPermission === null) {
    return <Text>Запрос разрешения камеры</Text>;
  }
  if (hasPermission === false) {
    return <Text>Нет доступа к камере!</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <TouchableOpacity style = {styles.againButton} onPress={() => {setScanned(false)}} >
        <Text style = {{textAlign:'center'}} >Нажмите,чтобы отсканировать снова</Text>
        </TouchableOpacity >}
      <TouchableOpacity style={styles.backButton}  onPress={() => {navigation.navigate('Goods',{data: text})}}>
        <Text style = {{textAlign:'center'}}>Назад</Text>
      </TouchableOpacity >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backButton:{
    borderWidth:2,
    paddingVertical:13,
    backgroundColor:'#00aaff',
    borderRadius: 16,
    marginHorizontal:20,
    marginBottom: -600,
    
  },
  againButton:{
    borderWidth:2,
    paddingVertical:13,
    backgroundColor:'#00aaff',
    borderRadius: 16,
    marginHorizontal:20,
  }
});