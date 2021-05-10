import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Modal, Image, ActivityIndicator } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import SmallGood from '../components/goodSmall'

export default function ScanScreen({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("")
  const [Name, setName] = useState("")
  const [Price, setPrice] = useState(0)
  const [barcode, setBarcode] = useState("")
  const [modalVisible, setVisible] = useState(false)
  const arr = [{ price: 20 }, { price: 30 }, { price: 20 }, { price: 30 }, { price: 20 }, { price: 30 }]
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const GetGoodInfo = (barcode) => {
    fetch(`https://qrcodeback.azurewebsites.net/api/ProductQrcode?QR=${barcode}`)
      .then((response) => {
        setIsLoading(true)
        return response.json();
      })
      .then((data) => {
        setName(data.name)
        setPrice(data.price)
        setBarcode(data.qrcode)
        setVisible(true)
      });
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    //alert(`Ваш штрихкод: ${data}. Тип штрихкода - ${type}`);

    GetGoodInfo(data)
  };

  if (hasPermission === null) {
    return <Text>Запрос разрешения камеры</Text>;
  }
  if (hasPermission === false) {
    return <Text>Нет доступа к камере!</Text>;
  }

  return (
    <View style={styles.container} backButton={() => { setVisible(false) }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
      </BarCodeScanner>
      {scanned && <TouchableOpacity style={styles.againButton} onPress={() => { setScanned(false) }} >
        <Text style={{ textAlign: 'center', color: '#fff' }} >Нажмите,чтобы отсканировать снова</Text>
      </TouchableOpacity >}

      <Modal transparent={true} visible={modalVisible} style={styles.modal}>
        <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
          <View style={styles.modal}>
            <TouchableOpacity onPress={() => { setVisible(false) }} style={styles.closeModal}>
              <Text style={{ textAlign: 'center', color: '#fff' }}>Закрыть</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <Image source={require('../images/prosto.jpg')} style={styles.image}></Image>
            </View>
            <View>
              <Text style={{ fontSize: 20, marginLeft: 20, }}>{Name}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 8, }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 24, }}>{Price}</Text>
              </View>
              <View style={{ flexDirection: 'row', flex: 1, }}>
                <Ionicons onPress={() => { quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1) }} name={'remove-circle-outline'} size={30}></Ionicons>
                <Text style={{ fontSize: 18, marginTop: 3 }}> {quantity} шт </Text>
                <Ionicons onPress={() => { setQuantity(quantity + 1) }} name={'add-circle-outline'} size={30}></Ionicons>
              </View>
            </View>
            <Image source={require('../images/stick.jpg')} style={{ marginHorizontal: 20, marginTop: 15, }}></Image>
            <View>
              <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 22, }}>Похожие товары:</Text>
            </View>
            <View>
              <ScrollView horizontal={true} style={{ height: '17%' }}>
                {arr.map(good => { return <SmallGood price={good.price}></SmallGood> })}
              </ScrollView>
            </View>
            <View>
              <Text style={{ textAlign: 'center', fontSize: 22, }}>С этим берут:</Text>
            </View>
            <View>
              <ScrollView horizontal={true} style={{ height: '17%' }}>
                {arr.map(good => { return <SmallGood price={good.price}></SmallGood> })}
              </ScrollView>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Корзина', { data: { Name, Price, barcode, quantity } }), setVisible(false), setQuantity(1) }} style={styles.addButton}>
              <Text style={{ textAlign: 'center', paddingVertical: 11, color: '#fff', fontSize: 17 }}>Добавить</Text>
            </TouchableOpacity>

          </View>
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#00aa00',
    borderRadius: 13,
    marginHorizontal: '25%',
    marginTop: 20,

  },
  image: {
    height: 200,
    resizeMode: 'contain'

  },
  modal: {
    backgroundColor: "#ffffff",
    marginTop: '20%',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backButton: {
    borderWidth: 2,
    paddingVertical: 13,
    backgroundColor: '#00aaff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: -600,

  },
  againButton: {
    borderWidth: 2,
    paddingVertical: 13,
    backgroundColor: '#00aa00',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: -600,
    borderColor: '#00aa00'
  },
  closeModal: {
    paddingVertical: 8,
    marginHorizontal: '30%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#00aa00',

  },
});