import * as React from 'react';
import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, CheckBox, TouchableOpacity } from 'react-native';
import { useForm } from 'react-hook-form';



export default function RegScreen({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [birth, setBirth] = useState("")
  const [pass, setPass] = useState("")

  const handleNameChange = (val) => {
    setName(val)
  }
  const handleEmailChange = (val) => {
    setEmail(val)
  }
  const handleBirthChange = (val) => {
    setBirth(val)
  }
  const handlePasswordChange = (val) => {
    setPass(val)
  }
  const handlePhoneChange = (val) => {
    setPhone(val)
  }
  const Registrarion = () => {
    fetch(`http://qrcodeback.azurewebsites.net/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },

      body: JSON.stringify({
        name: name,
        e_mail: email,
        br_day: birth,
        password: pass,
        tel: phone,
      }
      )
    })
  }


  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: '15%', fontSize: 25, marginBottom: 20, }}>Регистрация</Text>
      <TextInput onChangeText={(val) => { handleNameChange(val) }} placeholder="Имя" maxLength={32} autoCorrect={false} style={styles.input}></TextInput>
      <TextInput onChangeText={(val) => { handleBirthChange(val) }} placeholder="Дата Рождения" maxLength={32} autoCorrect={false} style={styles.input}></TextInput>
      <TextInput onChangeText={(val) => { handleEmailChange(val) }} placeholder="Email" maxLength={32} autoCorrect={false} style={styles.input}></TextInput>
      <TextInput onChangeText={(val) => { handlePhoneChange(val) }} placeholder="Телефон" maxLength={32} autoCorrect={false} style={styles.input}></TextInput>
      <TextInput onChangeText={(val) => { handlePasswordChange(val) }} secureTextEntry={true} placeholder="Пароль" maxLength={32} autoCorrect={false} style={styles.input}></TextInput>
      <TextInput secureTextEntry={true} placeholder="Повторите пароль" maxLength={32} autoCorrect={false} style={styles.input}></TextInput>
      <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 30, }}>
        <CheckBox ></CheckBox>
        <Text style={{ fontSize: 16 }}>Даю согласие на обработку персональных данных</Text>
      </View>
      <TouchableOpacity onPress={() => { Registrarion(), navigation.navigate('Login') }} style={styles.buttonReg}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonReg: {
    marginTop: 80,
    marginHorizontal: '23%',
    borderRadius: 20,
    backgroundColor: '#00a86b',
    paddingVertical: 10,
  },
  input: {
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