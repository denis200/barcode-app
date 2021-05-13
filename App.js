
import React from 'react';
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomePage"
import LoginScreen from "./screens/LoginPage"
import RegScreen from "./screens/RegPage"
import { AuthContex } from './components/contex'
import AsyncStorage from '@react-native-community/async-storage'
import ScanScreen from "./screens/ScanPage"
import { StyleSheet, Text, View, ScrollView, FlatList, Image, useEffect, ActivityIndicator } from 'react-native';

import GoodsTabNavScreen from './screens/GoodsTabNavPage'
const Stack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState('')
  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        }
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  }
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContex = React.useMemo(() => ({
    signIn: (userName, password) => {
      let userToken;
      userToken = null
      fetch(`http://qrcodeback.azurewebsites.net/token?username=${userName}&password=${password}`, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      }).then((res) => {

        if (res.ok && res.status === 200) {
          return res.json()
        }
      }).then((data) => {
        try {
          //alert(`${data}`)
          if (data) {
            userToken = data.access_token
            //alert(`${userToken}`)
            AsyncStorage.setItem('userToken', 'Bearer ' + userToken);

            fetch(`http://qrcodeback.azurewebsites.net/api/User?`, {
              headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + userToken,
              },
            }).then((res) => {
              alert(`${res.status}`)
              alert(`${'Bearer ' + userToken}`)
              return res.json();

            }).then((data) => {
              if (data) {
                // alert(`data is ${JSON.stringify(data)}`)
                try {
                  AsyncStorage.setItem('user', JSON.stringify(data));

                } catch (error) {
                  //  alert(`${JSON.stringify(error)}`)
                }
                dispatch({ type: 'LOGIN', id: userName, token: token })
              }

            })

          }

        } catch (e) {
          alert(e)
        }



      })
    },
    signOut: () => {
      try {
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('user');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      setUserToken('qwer')
      setIsLoading(false)
    },
  }), [])

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken
      userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        alert(e)
      }

      //alert(`user token ${ userToken } `)
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#00aa00' size="large" />
      </View>
    )
  }

  return (
    <AuthContex.Provider value={authContex}>
      <NavigationContainer >
        {loginState.userToken !== null ? <GoodsTabNavScreen /> : (<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }} >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Reg" component={RegScreen} />
          <Stack.Screen name="GoodsTab" component={GoodsTabNavScreen} />

        </Stack.Navigator>)}

      </NavigationContainer>
    </AuthContex.Provider>


  );
};
