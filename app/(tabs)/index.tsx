import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LessonItem = ({
  title,
  locked = false,
}: {
  title: string;
  locked?: boolean;
}) => (
  <View style={styles.lessonItem}>
    <Image
      source={require("../../assets/images/lesson-avatar.png")}
      style={styles.lessonAvatar}
    />
    <Text style={styles.lessonTitle}>{title}</Text>
    {locked && <Ionicons name="lock-closed" size={20} color="#ccc" />}
  </View>
);

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.languageSelector}>
          <Image
            source={require("../../assets/images/nepal-flag.png")}
            style={styles.flagIcon}
          />
          <Ionicons name="chevron-down" size={24} color="#000" />
        </View>

        <View style={styles.headerIcons}>
          <View style={styles.streakContainer}>
            <Ionicons name="flame" size={24} color="#FF9500" />
            <Text>0</Text>
          </View>
          <View style={styles.starsContainer}>
            <Ionicons name="star" size={24} color="#FFD700" />
            <Text>0/20</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Level Section */}
      <View style={styles.levelSection}>
        <TouchableOpacity style={styles.levelHeader}>
          <Text style={styles.levelTitle}>Levels</Text>
          <Ionicons name="chevron-down" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.currentLevel}>Beginner A1</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: "0%" }]} />
        </View>
      </View>

      {/* Chapter Section */}
      <View style={styles.chapterSection}>
        <View style={styles.chapterHeader}>
          <Text style={styles.chapterTitle}>Chapter 1</Text>
          <Text style={styles.lessonsCount}>0/6 lessons completed</Text>
          <TouchableOpacity>
            <Ionicons name="cloud-download-outline" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>

        {/* Lessons List */}
        <View style={styles.lessonsList}>
          <LessonItem title="नमस्ते!" />
          <LessonItem title="तिम्रो नाम के हो?" locked />
          <LessonItem title="कस्तो हुनुहुन्छ?" locked />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 50,
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  streakContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  levelSection: {
    padding: 16,
  },
  levelHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  currentLevel: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E5E5EA",
    borderRadius: 4,
    marginTop: 8,
  },
  progress: {
    height: "100%",
    backgroundColor: "#34C759",
    borderRadius: 4,
  },
  premiumBanner: {
    backgroundColor: "#FFD700",
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  premiumContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  endsSoonBadge: {
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  endsSoonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  premiumText: {
    fontSize: 16,
    fontWeight: "600",
  },
  chapterSection: {
    padding: 16,
  },
  chapterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  chapterTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  lessonsCount: {
    color: "#666",
  },
  lessonsList: {
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    padding: 16,
  },
  lessonItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  lessonAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  lessonTitle: {
    flex: 1,
    fontSize: 16,
  },
});
