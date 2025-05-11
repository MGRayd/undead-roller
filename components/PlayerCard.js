import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PlayerCard = ({ player, onRemove }) => {
  return (
    <View style={styles.playerCard}>
      <View style={styles.playerHeader}>
        <Text style={styles.name}>{player.name}</Text>
        {onRemove && (
          <TouchableOpacity onPress={onRemove}>
            <Text style={styles.remove}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.score}>Brains: {player.brains}</Text>
    </View>
  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  playerCard: {
    backgroundColor: '#1f1f1f',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  playerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#fff',
  },
  remove: {
    color: '#ff4d4d',
    fontSize: 20,
    paddingHorizontal: 8,
  },
  score: {
    color: '#ccc',
    marginTop: 8,
  },
});
