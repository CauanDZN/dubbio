import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const TeacherDetailsScreen = ({ route }) => {
  const { teacher } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Detalhes do Professor</Text>
      </View>

      <View style={styles.teacherDetailsContainer}>
        <Image source={teacher.image} style={styles.teacherDetailsImage} />
        <Text style={styles.teacherDetailsName}>{teacher.name}</Text>
        <Text style={styles.teacherDetailsRole}>{teacher.role}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: themeColors.gray300,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuIcon: {
    fontSize: 20,
  },
  adContainer: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: themeColors.gray100,
  },
  adImage: {
    width: 239,
    height: 181,
    borderRadius: 10,
  },
  adTitle: {
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  teacherContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: themeColors.gray300,
  },
  teacherImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  teacherName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  teacherRole: {
    marginTop: 3,
  },
  logoutButton: {
    backgroundColor: themeColors.yellow,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: themeColors.gray700,
    fontWeight: 'bold',
  },
  backButton: {
    fontSize: 20,
    color: themeColors.gray700,
    marginRight: 10,
  },
  teacherDetailsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  teacherDetailsImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  teacherDetailsName: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 18,
  },
  teacherDetailsRole: {
    marginTop: 5,
    fontSize: 16,
  },
});


export default TeacherDetailsScreen;