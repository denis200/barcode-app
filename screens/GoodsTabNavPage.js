import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GoodsScreen from "./GoodsPage"
import Ionicons from 'react-native-vector-icons/Ionicons';
import StoryScreen from './BuyStory'
import ProfileScreen from './ProfilePage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanScreen from "./ScanPage"
import CreditCardScreen from './CreditCardPage'
import UserDataScreen from './UserContactData'

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Профиль" component={ProfileScreen} />
      <ProfileStack.Screen name="Личная информация" component={UserDataScreen} />
      <ProfileStack.Screen name="Банковские карты" component={CreditCardScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function GoodsTabNavScreen() {
  return (
    <Tab.Navigator initialRouteName='Корзина' screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Профиль') {
          iconName = focused
            ? 'person-circle-outline'
            : 'person-outline';
        } else if (route.name === 'Корзина') {
          iconName = focused ? 'cart-outline' : 'cart-outline';
        } else if (route.name === 'История покупок') {
          iconName = focused ? 'basket-outline' : 'basket-outline';
        } else if (route.name === 'Сканировать') {
          iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}>
      <Tab.Screen name="Профиль" component={ProfileStackScreen} />
      <Tab.Screen name="Сканировать" component={ScanScreen} />
      <Tab.Screen name="Корзина" component={GoodsScreen} />
      <Tab.Screen name="История покупок" component={StoryScreen} />
    </Tab.Navigator>
  )
}