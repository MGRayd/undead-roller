import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import brainIcon from '../assets/icons/brain.png';

const Leaderboard = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.brains - a.brains);

  return (
    <View style={styles.leaderboard}>
      <Text style={styles.leaderboardTitle}>Leaderboard</Text>
      {sortedPlayers.map((player) => (
        <View key={player.id} style={styles.leaderboardItem}>
          <Text style={styles.leaderboardName}>{player.name}</Text>
          <View style={styles.brainCount}>
            <Image source={brainIcon} style={styles.brainIconSmall} />
            <Text style={styles.brainText}>{player.brains}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  leaderboard: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    paddingBottom: 30,
  },
  leaderboardTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  leaderboardName: {
    color: '#fff',
    fontSize: 16,
  },
  brainCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brainIconSmall: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  brainText: {
    color: '#fff',
    fontSize: 16,
  },
});