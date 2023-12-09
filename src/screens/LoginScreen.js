import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const navigation = useNavigation();
  
  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    linearGradient: {
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    headerText: {
      fontFamily: 'BebasNeue-Regular',
      fontSize: 40,
      color: '#000',
      marginTop: 140,
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
    },
    formContainer: {
      spaceY: 2,
    },
    input: {
      padding: 4,
      backgroundColor: themeColors.gray100,
      color: themeColors.gray700,
      borderRadius: 20,
      marginBottom: 20,
    },
    forgotPasswordText: {
      color: themeColors.gray700,
      marginBottom: 5,
      color: '#B7B7B7'
    },
    loginButton: {
      background: `linear-gradient(45deg, ${themeColors.yellow}, #53e88b)`,
      borderRadius: 20,
      paddingVertical: 10,
    },
    inputLabel: {
      color: themeColors.gray700,
      color: '#B7B7B7'
    },
    loginButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
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
      color: '#B7B7B7'
    },
    signUpLink: {
      color: themeColors.yellow,
      fontWeight: 'bold',
    },
  };

  const handleLogin = async () => {
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
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>DUBBIO</Text>
          </View>
      </SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>e-mail</Text>
          <TextInput style={styles.input} placeholder="email" value="fulano@gmail.com" />
          <Text style={styles.inputLabel}>senha</Text>
          <TextInput style={styles.input} secureTextEntry placeholder="password" value="fulano12345" />
          <TouchableOpacity style={styles.forgotPasswordText}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <LinearGradient
              colors={['#877dfa', '#0380CC']}
              style={styles.loginButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginButtonText}>ENTRAR</Text>
              </TouchableOpacity>
            </LinearGradient>
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
          <Text style={styles.createAccountText}>Não possui conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpLink}> Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </LinearGradient>
  );
}
