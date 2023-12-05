import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import SignUpScreen from '../src/screens/SignUpScreen';
import LoginScreen from '../src/screens/LoginScreen';
import TeacherDetailsScreen from '../src/screens/TeacherDetails';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está logado no AsyncStorage
    AsyncStorage.getItem('userToken').then(token => {
      if (token) {
        // Usuário está logado
        setIsUserLoggedIn(true);
      } else {
        // Usuário não está logado
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="TeacherDetails" options={{ headerShown: false }} component={TeacherDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
