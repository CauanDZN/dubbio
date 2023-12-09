import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Drawer = createDrawerNavigator();

export const themeColors = {
  bg: '#181818',
  gray100: '#d1d8e0',
  gray300: '#B7B7B7',
  purple: '#6833FF',
  gray700: '#2f3542',
};

const adData = [
  { id: '1', title: 'Destaques', image: require('../../assets/shopee.png') },
  { id: '2', title: 'Destaques', image: require('../../assets/shopee.png') },
  { id: '3', title: 'Destaques', image: require('../../assets/shopee.png') },
  { id: '4', title: 'Destaques', image: require('../../assets/shopee.png') },
  { id: '5', title: 'Destaques', image: require('../../assets/shopee.png') },
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
      <TouchableOpacity>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>DUBBIO</Text>
      <TouchableOpacity>
        <Ionicons name="md-search" size={22} color="#6833FF" />
      </TouchableOpacity>
    </View>
  );
};

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const HomeContent = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* Lista de anúncios */}
      <View style={styles.carouselContainer}>
        <Carousel
          data={adData}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.adContainer}>
              <Image source={item.image} style={styles.adImage} />
              <Text style={styles.adTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          sliderWidth={300}
          itemWidth={300}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={adData.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.8}
        />
      </View>

      {/* Lista de professores */}
      <FlatList
        data={teacherData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.teacherContainer}
            onPress={() => navigation.navigate('TeacherDetails', { teacher: item })}
          >
            <View style={styles.teacherInfo}>
              <Image source={item.image} style={styles.teacherImage} />
              <View style={styles.teacherTextContainer}>
                <Text style={styles.teacherName}>{item.name}</Text>
                <Text style={styles.teacherRole}>{item.role}</Text>
              </View>
            </View>
            <View style={styles.starContainer}>
              <Ionicons name="md-star" size={20} color={themeColors.purple} />
              <Ionicons name="md-star" size={20} color={themeColors.purple} />
              <Ionicons name="md-star" size={20} color={themeColors.purple} />
              <Ionicons name="md-star" size={20} color={themeColors.purple} />
              <Ionicons name="md-star" size={20} color={themeColors.gray700} />
            </View>
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
    backgroundColor: themeColors.bg,
  },

  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },  

  carouselContainer: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },

  paginationContainer: {
    marginTop: -5,
  },

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: '#6833FF',
  },

  paginationInactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: -5,
    backgroundColor: themeColors.gray100,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderBottomColor: themeColors.gray300,
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'BebasNeue-Regular',
  },
  menuIcon: {
    fontSize: 20,
    color: '#6833FF',
  },
  adContainer: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: themeColors.gray100,
    alignItems: 'center',
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
    color: '#6833FF',
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
    color: themeColors.purple,
  },
  teacherRole: {
    marginTop: 3,
    color: themeColors.gray100,
  },
  logoutButton: {
    backgroundColor: themeColors.purple,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
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
    color: themeColors.purple,
  },
  teacherDetailsRole: {
    marginTop: 5,
    fontSize: 16,
    color: themeColors.gray100,
  },
});

export default HomeContent;

