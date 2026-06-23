import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../telas/Login';
import Home from '../telas/Home';

const Stack = createNativeStackNavigator();

export default function NavegacaoPags() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}