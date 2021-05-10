import * as React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, Icon } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContex } from '../components/contex'

export default function LoginScreen({ navigation }) {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
  })

  const { signIn } = React.useContext(AuthContex);

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      })
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      })
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    })
  }

  const loginHandle = (username, password) => {
    signIn(username, password)
  }


  return (
    <View >
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: '70%' }}>Добро пожаловать!</Text>
      <TextInput placeholder="Email" maxLength={32} autoCorrect={false} style={styles.inputLogin} onChangeText={(val) => textInputChange(val)} ></TextInput>
      <TextInput placeholder="Пароль" maxLength={25} autoCorrect={false} secureTextEntry={true} style={styles.inputPass} onChangeText={(val) => handlePasswordChange(val)}></TextInput>

      <TouchableOpacity style={styles.buttonAuth}>
        <Text onPress={() => { loginHandle(data.username, data.password) }} style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputLogin: {
    borderWidth: 2,
    borderRadius: 14,
    height: 50,
    fontSize: 20,
    marginHorizontal: 30,
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
    paddingHorizontal: 20,
    marginTop: 40,

  },
  buttonAuth: {
    marginTop: 40,
    marginHorizontal: '23%',
    borderRadius: 20,
    backgroundColor: '#00a86b',
    paddingVertical: 10,
  },
  inputPass: {
    borderWidth: 2,
    borderRadius: 14,
    height: 50,
    fontSize: 20,
    marginHorizontal: 30,
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
    paddingHorizontal: 20,
    marginTop: 20,

  },
})
