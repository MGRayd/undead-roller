import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Platform,
} from 'react-native';

import brainIcon from '../assets/icons/brain.png';

import PlayerCard from '../components/PlayerCard';
import TurnTracker from '../components/TurnTracker';
import Leaderboard from '../components/Leaderboard';

const GameScreen = ({ route }) => {
  const { mode } = route.params;

  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [turnData, setTurnData] = useState({ brains: 0, shotguns: 0 });
  const [statusEffects, setStatusEffects] = useState({
    helmet: false,
    energyDrink: false,
  });

  const addPlayer = () => {
    if (!newPlayerName.trim()) return;
    setPlayers((prev) => [
      ...prev,
      { id: Date.now().toString(), name: newPlayerName.trim(), brains: 0 },
    ]);
    setNewPlayerName('');
  };

  const removePlayer = (id) => {
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  };

  const startGame = () => {
    if (players.length < 2) {
      Alert.alert('Add at least 2 players to start the game.');
      return;
    }
    setIsGameStarted(true);
  };

  const quitGame = () => {
    setIsGameStarted(false);
    setCurrentPlayerIndex(0);
    setTurnData({ brains: 0, shotguns: 0 });
    setStatusEffects({ helmet: false, energyDrink: false });
    setPlayers([]);
  };

  const handleDiceResult = (type) => {
    const updated = { ...turnData, [type]: turnData[type] + 1 };

    const requiredShotguns = statusEffects.helmet ? 4 : 3;

    if (type === 'shotguns' && updated.shotguns >= requiredShotguns) {
      Alert.alert(
        'BUST!',
        `${players[currentPlayerIndex].name} rolled ${requiredShotguns} shotguns and loses all brains this turn.`
      );
      endTurn(false);
    } else {
      setTurnData(updated);
    }
  };

  const endTurn = (bankBrains = true) => {
    const updatedPlayers = [...players];

    if (bankBrains) {
      updatedPlayers[currentPlayerIndex].brains += turnData.brains;

      if (updatedPlayers[currentPlayerIndex].brains >= 13) {
        Alert.alert(`${updatedPlayers[currentPlayerIndex].name} wins with 13 brains!`);
        setIsGameStarted(false);
        return;
      }
    }

    setPlayers(updatedPlayers);
    setTurnData({ brains: 0, shotguns: 0 });
    setStatusEffects({ helmet: false, energyDrink: false });
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Undead Roller</Text>

        {!isGameStarted && (
          <>
            <View style={styles.topButton}>
              <Button
                title="Start Game"
                onPress={startGame}
                disabled={players.length < 2}
              />
            </View>

            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={newPlayerName}
                placeholder="Enter player name"
                placeholderTextColor="#aaa"
                onChangeText={setNewPlayerName}
              />
              <Button title="Add" onPress={addPlayer} />
            </View>

            <FlatList
              data={players}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <PlayerCard
                  player={item}
                  onRemove={() => removePlayer(item.id)}
                  removable
                />
              )}
            />
          </>
        )}

        {isGameStarted && players.length > 0 && (
          <>
            <View style={styles.quitButton}>
              <Button title="Quit Game" color="#ff4d4d" onPress={quitGame} />
            </View>

            <PlayerCard player={players[currentPlayerIndex]} />

            <TurnTracker
              currentPlayer={players[currentPlayerIndex]}
              turnData={turnData}
              onDiceResult={handleDiceResult}
              onEndTurn={() => endTurn(true)}
              mode={mode}
              statusEffects={statusEffects}
              setStatusEffects={setStatusEffects}
            />

            <Leaderboard players={players} brainIcon={brainIcon} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, color: '#fff', textAlign: 'center', marginBottom: 20 },
  topButton: { marginBottom: 20 },
  quitButton: { marginBottom: 20 },
  inputRow: { flexDirection: 'row', marginBottom: 20 },
  input: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    color: '#fff',
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
  },
});
