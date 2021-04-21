
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomePage"
import LoginScreen from "./screens/LoginPage"
import RegScreen from "./screens/RegPage"
import GoodsScreen from "./screens/GoodsPage"
import ScanScreen from "./screens/ScanPage"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reg" component={RegScreen} />
        <Stack.Screen name="Goods" component={GoodsScreen}/>
        <Stack.Screen name="Scan" component={ScanScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
