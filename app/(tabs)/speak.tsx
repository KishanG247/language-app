import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ConversationItem = {
  id: string;
  title: string;
  subtitle: string;
  level: string;
  image: any;
  category: string;
  icon?: string;
};

const conversations: ConversationItem[] = [
  {
    id: '1',
    title: 'Giving your name',
    subtitle: 'Introduce yourself',
    level: 'A1 Beginner',
    image: require('@/assets/images/avatar1.png'),
    category: 'Introduce yourself',
    icon: '👋'
  },
  {
    id: '2',
    title: 'Talking about your job',
    subtitle: 'Talk about your job',
    level: 'A1 Beginner',
    image: require('@/assets/images/avatar2.png'),
    category: 'Talk about your job',
    icon: '💼'
  },
  {
    id: '3',
    title: 'Ordering food and drinks',
    subtitle: 'Order food',
    level: 'A1 Beginner',
    image: require('@/assets/images/avatar3.png'),
    category: 'Order food',
    icon: '🍽️'
  },
  {
    id: '4',
    title: 'Ordering at a restaurant',
    subtitle: 'Restaurant',
    level: 'C1 Advanced',
    image: require('@/assets/images/avatar4.png'),
    category: 'Order food',
    icon: '🍷'
  }
];

export default function SpeakScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          
          <Text style={styles.title}>Conversations</Text>
          
          <View style={styles.descriptionContainer}>
            <Ionicons name="chatbubble-outline" size={24} color="#666" />
            <Text style={styles.description}>
              Practise speaking with AI in real-life situations at your level and get personalised feedback.
            </Text>
          </View>
        </View>

        {conversations.map((item) => (
          <TouchableOpacity key={item.id} style={styles.conversationItem}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryText}>{item.icon} {item.category}</Text>
            </View>
            
            <View style={styles.itemContent}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemLevel}>{item.level}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#007AFF" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  premiumBadge: {
    backgroundColor: '#F0E7FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  premiumText: {
    color: '#6B4CE6',
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  descriptionContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  description: {
    flex: 1,
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  freeBadge: {
    marginTop: 8,
    marginBottom: 20,
  },
  freeText: {
    color: '#00B894',
    fontWeight: '600',
  },
  conversationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryHeader: {
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  itemLevel: {
    color: '#666',
  },
}); 