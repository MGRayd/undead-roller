import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Undead Roller</Text>
      <Text style={styles.subtitle}>Choose Your Game Mode</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game', { mode: 'classic' })}
      >
        <Text style={styles.buttonText}>Zombie Dice 1: Original</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game', { mode: 'doubleFeature' })}
      >
        <Text style={styles.buttonText}>Zombie Dice 2: Double Feature</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game', { mode: 'schoolBus' })}
      >
        <Text style={styles.buttonText}>Zombie Dice 3: School Bus</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
