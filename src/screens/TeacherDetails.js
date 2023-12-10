import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { themeColors } from '../../theme';

const TeacherDetailsScreen = ({ navigation, route }) => {
  const { teacher } = route.params;
  const [activeTab, setActiveTab] = useState('Feed');

  const renderContent = () => {
    switch (activeTab) {
      case 'Feed':
        return <Text style={{ color: '#fff' }}>Conteúdo do Feed</Text>;
      case 'Agenda':
        return <Text style={{ color: '#fff' }}>Conteúdo da Agenda</Text>;
      case 'Avaliacoes':
        return <Text style={{ color: '#fff' }}>Conteúdo das Avaliações</Text>;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Detalhes do Professor</Text>
        </View>

        <View style={styles.teacherDetailsContainer}>
          <Image source={teacher.image} style={styles.teacherDetailsImage} />
          <Text style={styles.teacherDetailsName}>{teacher.name}</Text>

          <View style={styles.starContainer}>
            <Ionicons name="md-star" size={20} color={themeColors.purple} />
            <Ionicons name="md-star" size={20} color={themeColors.purple} />
            <Ionicons name="md-star" size={20} color={themeColors.purple} />
            <Ionicons name="md-star" size={20} color={themeColors.purple} />
            <Ionicons name="md-star" size={20} color={themeColors.gray700} />
          </View>

          <View style={styles.verifiedContainer}>
            <MaterialIcons name="verified" size={24} color="#46A3EB"/>
            <Text style={styles.verifiedText}>Usuário verificado</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Posts</Text>
              <Text style={styles.statValue}>3</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Seguidores</Text>
              <Text style={styles.statValue}>1M</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Seguindo</Text>
              <Text style={styles.statValue}>323</Text>
            </View>
          </View>

          {/* Adiciona as abas com borda branca */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tabItem, activeTab === 'Feed' && styles.activeTab]}
              onPress={() => setActiveTab('Feed')}
            >
              <Text style={styles.tabLabel}>Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabItem, activeTab === 'Agenda' && styles.activeTab]}
              onPress={() => setActiveTab('Agenda')}
            >
              <Text style={styles.tabLabel}>Agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabItem, activeTab === 'Avaliacoes' && styles.activeTab]}
              onPress={() => setActiveTab('Avaliacoes')}
            >
              <Text style={styles.tabLabel}>Avaliações</Text>
            </TouchableOpacity>
          </View>

          {/* Renderiza o conteúdo da aba selecionada */}
          {renderContent()}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  contentContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  verifiedText: {
    marginLeft: 5,
    color: themeColors.gray100,
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
    color: themeColors.gray100,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: themeColors.gray100,
  },
  statValue: {
    fontWeight: 'bold',
    color: themeColors.purple,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabLabel: {
    color: '#fff',
  },
  activeTab: {
    borderBottomWidth: 2, // Adiciona uma linha branca na parte inferior da aba ativa
    borderBottomColor: themeColors.purple, // Cor da linha branca
  },
});

export default TeacherDetailsScreen;
