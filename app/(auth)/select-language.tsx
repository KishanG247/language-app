import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Language = {
  id: string;
  name: string;
  learners: string;
};

const languages: Language[] = [
  { id: 'en', name: 'English', learners: '26M LEARNERS' },
  { id: 'fr', name: 'French', learners: '5M LEARNERS' },
  { id: 'es', name: 'Spanish', learners: '5M LEARNERS' },
  { id: 'de', name: 'German', learners: '4M LEARNERS' },
  { id: 'nl', name: 'Dutch', learners: '30K LEARNERS' },
  { id: 'it', name: 'Italian', learners: '2M LEARNERS' },
  { id: 'ja', name: 'Japanese', learners: '4M LEARNERS' },
  { id: 'ru', name: 'Russian', learners: '2M LEARNERS' },
  { id: 'ko', name: 'Korean', learners: '100K LEARNERS' },
  { id: 'pt', name: 'Portuguese', learners: '800K LEARNERS' },
  { id: 'pl', name: 'Polish', learners: '500K LEARNERS' },
  { id: 'tr', name: 'Turkish', learners: '300K LEARNERS' },
];

export default function SelectLanguageScreen() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = React.useState<string | null>(null);

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
    // Add a small delay before navigation for better UX
    setTimeout(() => {
      router.push('/(tabs)');
    }, 200);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>

      <Text style={styles.title}>I want to learn...</Text>

      <ScrollView style={styles.languageList}>
        <View style={styles.grid}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language.id}
              onPress={() => handleLanguageSelect(language.id)}
              style={styles.languageCard}
            >
              <View style={[
                styles.languageBox,
                selectedLanguage === language.id && styles.selectedLanguageBox
              ]}>
                <View style={styles.languageContent}>
                  <Text style={[
                    styles.languageName,
                    selectedLanguage === language.id && styles.selectedLanguageText
                  ]}>
                    {language.name}
                  </Text>
                  <Text style={[
                    styles.learnerCount,
                    selectedLanguage === language.id && styles.selectedLearnerCount
                  ]}>
                    {language.learners}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    padding: 16,
    gap: 16,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E5EA',
    borderRadius: 2,
  },
  progress: {
    width: '20%',
    height: '100%',
    backgroundColor: '#34C759',
    borderRadius: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  languageList: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  languageCard: {
    width: '50%',
    padding: 8,
  },
  languageBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    overflow: 'hidden',
    minHeight: 120,
  },
  selectedLanguageBox: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  languageContent: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageName: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
    color: '#000',
  },
  selectedLanguageText: {
    color: '#fff',
  },
  learnerCount: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedLearnerCount: {
    color: '#fff',
    opacity: 0.8,
  },
}); 