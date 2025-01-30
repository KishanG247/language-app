import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '../../providers/AuthProvider';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { signUp } = useAuth();

  const handleSignUp = async () => {
    try {
      await signUp(email, name, password);
      router.push('/(auth)/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <Text style={styles.label}>Password (min 6 characters)</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={handleSignUp}
        >
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By joining I declare that I have read and accept the{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy</Text>.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cancelButton: {
    color: '#007AFF',
    fontSize: 16,
  },
  domain: {
    fontSize: 16,
    fontWeight: '500',
  },
  menuButton: {
    fontSize: 20,
    color: '#007AFF',
  },
  logo: {
    width: 120,
    height: 40,
    alignSelf: 'center',
    marginTop: 20,
  },
  subText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  termsText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
    lineHeight: 20,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
}); 