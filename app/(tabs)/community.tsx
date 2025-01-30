import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FlagImage from '@/components/FlagImage';
import { CountryCode } from '@/utils/flags';

type TabType = 'discover' | 'friends';
type Exercise = {
  id: string;
  user: {
    name: string;
    avatar: any;
    language: string;
    flag: any;
    isPremium?: boolean;
  };
  audioLength?: string;
  text?: string;
  language: string;
  countryCode: CountryCode;
};

const exercises: Exercise[] = [
  {
    id: '1',
    user: {
      name: 'Gabriel',
      avatar: require('@/assets/images/avatar2.png'),
      language: 'Portuguese',
      flag: 'PT',
    },
    audioLength: '0:06',
    language: 'ENGLISH',
    countryCode: 'PT',
  },
  {
    id: '2',
    user: {
      name: 'hamzanourani81@gmail.com',
      avatar: require('@/assets/images/avatar1.png'),
      language: 'English',
      flag: 'AU',
      isPremium: true,
    },
    text: 'how are you bro',
    language: 'ENGLISH',
    countryCode: 'AU',
  },
];

export default function CommunityScreen() {
  const [activeTab, setActiveTab] = useState<TabType>('discover');

  const renderExerciseCard = (exercise: Exercise) => (
    <View key={exercise.id} style={styles.exerciseCard}>
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <Image source={exercise.user.avatar} style={styles.avatar} />
          <FlagImage countryCode={exercise.user.flag} style={styles.flagIcon} />
        </View>
        <View style={styles.userDetails}>
          <View style={styles.nameContainer}>
            <Text style={styles.userName}>{exercise.user.name}</Text>
        
          </View>
          <View style={styles.languageContainer}>
            <Ionicons name="chatbubble-outline" size={16} color="#666" />
            <Text style={styles.languageText}>{exercise.user.language}</Text>
          </View>
        </View>
      </View>

      {exercise.audioLength ? (
        <View style={styles.audioPlayer}>
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
          <Text style={styles.duration}>{exercise.audioLength}</Text>
        </View>
      ) : (
        <Text style={styles.exerciseText}>{exercise.text}</Text>
      )}

      <View style={styles.languageTag}>
        <FlagImage countryCode={exercise.countryCode} style={styles.smallFlag} />
        <Text style={styles.languageTagText}>{exercise.language}</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="thumbs-up-outline" size={20} color="#007AFF" />
          <Text style={styles.actionButtonText}>It's perfect!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="pencil-outline" size={20} color="#007AFF" />
          <Text style={styles.actionButtonText}>Suggest correction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Community</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="options-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'discover' && styles.activeTab]}
          onPress={() => setActiveTab('discover')}
        >
          <Text style={[styles.tabText, activeTab === 'discover' && styles.activeTabText]}>
            Discover
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'friends' && styles.activeTab]}
          onPress={() => setActiveTab('friends')}
        >
          <Text style={[styles.tabText, activeTab === 'friends' && styles.activeTabText]}>
            Friends
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>
          Help English learners by correcting their exercises
        </Text>
        {exercises.map(renderExerciseCard)}
      </ScrollView>

      <TouchableOpacity style={styles.practiseButton}>
        <Text style={styles.practiseButtonText}>Practise now</Text>
        <Ionicons name="chevron-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 4,
    margin: 16,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
  exerciseCard: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 0,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  flagIcon: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userDetails: {
    marginLeft: 12,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  languageText: {
    color: '#666',
  },
  audioPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    padding: 8,
    borderRadius: 8,
    marginVertical: 8,
  },
  playButton: {
    backgroundColor: '#007AFF',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#DDD',
    marginHorizontal: 12,
    borderRadius: 2,
  },
  progress: {
    width: '30%',
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 2,
  },
  duration: {
    color: '#666',
  },
  exerciseText: {
    fontSize: 16,
    marginVertical: 8,
  },
  languageTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    alignSelf: 'flex-start',
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginVertical: 8,
  },
  smallFlag: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 6,
  },
  languageTagText: {
    color: '#666',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
    gap: 8,
  },
  actionButtonText: {
    color: '#007AFF',
    fontWeight: '500',
  },
  practiseButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  practiseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4,
  },
}); 