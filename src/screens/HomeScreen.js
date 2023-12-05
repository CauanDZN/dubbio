import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const adData = [
  { id: '1', title: 'Anúncio 1', image: require('../../assets/shopee.png') },
  { id: '2', title: 'Anúncio 2', image: require('../../assets/shopee.png') },
  { id: '3', title: 'Anúncio 3', image: require('../../assets/shopee.png') },
  { id: '4', title: 'Anúncio 4', image: require('../../assets/shopee.png') },
  { id: '5', title: 'Anúncio 5', image: require('../../assets/shopee.png') },
  // ... add more ads
];

const teacherData = [
  { id: '1', name: 'André Lima', role: 'Professor de Redes de Computadores', image: require('../../assets/andre-lima.png') },
  { id: '2', name: 'Vicente', role: 'Professor de Matemática', image: require('../../assets/vicente.png') },
  { id: '3', name: 'Victor', role: 'Professor de Biologia', image: require('../../assets/victor.png') },
  { id: '4', name: 'Clauton', role: 'Professor de Química', image: require('../../assets/clauton.png') },
  // ... add more teachers
];

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>DUBBIO</Text>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => navigation.openDrawer()}
      >
        <Text>☰</Text>
      </TouchableOpacity>
    </View>
  );
};

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

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

const HomeContent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* Lista de anúncios */}
      <FlatList
        data={adData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.adContainer}>
            <Image source={item.image} style={styles.adImage} />
            <Text style={styles.adTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Lista de professores */}
      <FlatList
        data={teacherData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.teacherContainer}
            onPress={() => navigation.navigate('TeacherDetails', { teacher: item })}
          >
            <Image source={item.image} style={styles.teacherImage} />
            <Text style={styles.teacherName}>{item.name}</Text>
            <Text style={styles.teacherRole}>{item.role}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Botão de deslogar */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutButtonText}>DESLOGAR</Text>
      </TouchableOpacity>
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

export default HomeContent;
