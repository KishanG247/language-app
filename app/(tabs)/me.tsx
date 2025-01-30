import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TabType = 'PROGRESS' | 'EXERCISES' | 'CORRECTIONS';

export default function MeScreen() {
  const [activeTab, setActiveTab] = React.useState<TabType>('PROGRESS');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="person-add-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('@/assets/images/avatar1.png')}
            style={styles.avatar}
          />
          <Image
            source={require('@/assets/images/nepal-flag.png')}
            style={styles.countryFlag}
          />
        </View>
        <Text style={styles.username}>kishan</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Ionicons name="flame-outline" size={20} color="#666" />
            <Text style={styles.statText}>0-day streak</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="location-outline" size={20} color="#666" />
            <Text style={styles.statText}>Australia</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="chatbubble-outline" size={20} color="#666" />
            <Text style={styles.statText}>Speaks English natively.</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="book-outline" size={20} color="#666" />
            <Text style={styles.statText}>Learning Nepali.</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="people-outline" size={20} color="#666" />
            <Text style={styles.statText}>0 friends</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {(['PROGRESS', 'EXERCISES', 'CORRECTIONS'] as TabType[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Learning Progress Card */}
      <View style={styles.learningCard}>
        <Text style={styles.sectionTitle}>Learning</Text>
        <View style={styles.languageProgress}>
          <Image
            source={require('@/assets/images/nepal-flag.png')}
            style={styles.languageFlag}
          />
          <View style={styles.progressInfo}>
            <Text style={styles.languageName}>Nepali</Text>
            <Text style={styles.progressPercent}>0%</Text>
            <View style={styles.statsRow}>
              <Text style={styles.statGreen}>↗ 4</Text>
              <Text style={styles.statRed}>🎯 0</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Days Learnt */}
      <View style={styles.daysSection}>
        <Text style={styles.sectionTitle}>Days learnt</Text>
        <View style={styles.daysGrid}>
          {['Mon', 'Wed', 'Fri', 'Sun'].map((day) => (
            <View key={day} style={styles.dayItem}>
              <View style={styles.dayCircle} />
              <Text style={styles.dayText}>{day}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  countryFlag: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  username: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 12,
  },
  statsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 16,
    gap: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    color: '#666',
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    color: '#666',
    fontSize: 16,
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '500',
  },
  learningCard: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  languageProgress: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  languageFlag: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  progressInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: '500',
  },
  progressPercent: {
    fontSize: 16,
    color: '#666',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },
  statGreen: {
    color: '#34C759',
  },
  statRed: {
    color: '#FF3B30',
  },
  daysSection: {
    padding: 16,
  },
  daysGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayItem: {
    alignItems: 'center',
    gap: 8,
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dayText: {
    color: '#666',
  },
}); 