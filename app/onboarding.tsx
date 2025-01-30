import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRouter, Link } from 'expo-router';

const OnboardingScreen = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#4c35d9', '#2b85f5']}
      style={styles.container}
    >
      <StatusBar style="light" />
      

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>
          Learn a language in 3 minutes{'\n'}a day
        </Text>
        
        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Buttons */}
        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => router.push('/(auth)/signup')}
        >
          <Text style={styles.startButtonText}>Start learning</Text>
        </TouchableOpacity>

        {/* Updated Login section */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Have an account? </Text>
          <Link href="/(auth)/login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 40,
  },
  subText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 5,
  },
  flagsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerImage: {
    width: 200,
    height: 200,
  },
  bottomSection: {
    marginTop: 100,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    color: 'white', 
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  startButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 20,
  },
  startButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
  loginLink: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default OnboardingScreen; 