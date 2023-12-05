import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });
  const [error, setError] = useState('');

  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    safeAreaView: {
      flex: 1,
    },
    linearGradient: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    backButton: {
      backgroundColor: themeColors.yellow,
      padding: 2,
      borderRadius: 12,
      marginLeft: 4,
    },
    headerImageContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50,
    },
    headerImage: {
      width: 100,
      height: 100,
    },
    mainContainer: {
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      flex: 1,
      backgroundColor: '#252525',
      padding: 20,
      paddingTop: 20,
    },
    formContainer: {
      spaceY: 2,
    },
    input: {
      padding: 4,
      backgroundColor: themeColors.gray100,
      color: themeColors.gray700,
      borderRadius: 20,
      marginBottom: 3,
    },
    signUpButton: {
      backgroundColor: themeColors.yellow,
      borderRadius: 20,
      paddingVertical: 10,
    },
    signUpButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: themeColors.gray700,
    },
    orText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: themeColors.gray700,
      paddingTop: 5,
    },
    socialButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      spaceX: 12,
    },
    socialButton: {
      padding: 2,
      backgroundColor: themeColors.gray100,
      borderRadius: 20,
    },
    createAccountContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 7,
    },
    createAccountText: {
      color: themeColors.gray500,
      fontWeight: 'bold',
    },
    loginLink: {
      color: themeColors.yellow,
      fontWeight: 'bold',
    },
  };

  const handleSignUp = async () => {
    const token = '123456789'; // Simulei a obtenção do token após o cadastro, substitua por sua lógica real
  
    // Salva o token no AsyncStorage
    await AsyncStorage.setItem('userToken', token);
  
    // Navega para a tela de Home
    navigation.navigate('Home');
  };
  

  return (
    <LinearGradient colors={['#877dfa', '#53e88b']} style={styles.linearGradient}>
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.headerImageContainer}>
          <Image source={require('../../assets/dubbio-black.png')} style={styles.headerImage} />
        </View>
      </SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.input}>Nome completo</Text>
          <TextInput
            style={styles.input}
            value={formData.nome}
            onChangeText={(text) => setFormData({ ...formData, nome: text })}
            placeholder='Nome'
          />
          <Text style={styles.input}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholder='E-mail'
          />
          <Text style={styles.input}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={formData.senha}
            onChangeText={(text) => setFormData({ ...formData, senha: text })}
            placeholder='Senha'
          />
          <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>CRIAR CONTA</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>Ou</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/icons/google.png')} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/icons/apple.png')} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../../assets/icons/facebook.png')} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>Já possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}> Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </LinearGradient>
  );
}
