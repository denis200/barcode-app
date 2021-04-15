import * as React from 'react';
import { Button, View, Text } from 'react-native';



export default function RegScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Reg Screen</Text>
        <Button
          title="Назад"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }