import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

import brainIcon from '../assets/icons/brain.png';

import PlayerCard from '../components/PlayerCard';
import TurnTracker from '../components/TurnTracker';
import Leaderboard from '../components/Leaderboard';
import * as Animatable from 'react-native-animatable';
import globalStyles from '../styles/globalStyles';
import zombieDiceImg from '../assets/images/zombie_dice.png';
import titleBannerImg from '../assets/images/title_banner.png';

const GameScreen = ({ route }) => {
  const { mode } = route.params;

  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [turnData, setTurnData] = useState({
    brains: 0,
    shotguns: 0,
    greenFootprints: 0,
  });
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
    setTurnData({ brains: 0, shotguns: 0, greenFootprints: 0 });
    setStatusEffects({ helmet: false, energyDrink: false });
    setPlayers([]);
  };

  const handleDiceResult = (type) => {
    const updated = { ...turnData, [type]: (turnData[type] || 0) + 1 };
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
      let totalBrains = turnData.brains;
      if (statusEffects.energyDrink) {
        totalBrains += turnData.greenFootprints;
      }

      updatedPlayers[currentPlayerIndex].brains += totalBrains;

      if (updatedPlayers[currentPlayerIndex].brains >= 13) {
        Alert.alert(`${updatedPlayers[currentPlayerIndex].name} wins with 13 brains!`);
        setIsGameStarted(false);
        return;
      }
    }

    setPlayers(updatedPlayers);
    setTurnData({ brains: 0, shotguns: 0, greenFootprints: 0 });
    setStatusEffects({ helmet: false, energyDrink: false });
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
  };

  const currentPlayer = players[currentPlayerIndex];

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      {!isGameStarted ? (
        <View style={globalStyles.container}>
          <View style={globalStyles.centeredRow}>
            <Image source={titleBannerImg} style={globalStyles.heroImage} />
          </View>

          <View style={globalStyles.topButton}>
            <Button title="Start Game" onPress={startGame} disabled={players.length < 2} />
          </View>

          <View style={globalStyles.inputRow}>
            <TextInput
              style={globalStyles.input}
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
        </View>
      ) : (
        <ScrollView contentContainerStyle={globalStyles.container}>
          <Text style={globalStyles.title}>Undead Roller</Text>

          {players.length > 0 && currentPlayer && (
            <>
              <View style={globalStyles.quitButton}>
                <Button title="Quit Game" color="#ff4d4d" onPress={quitGame} />
              </View>

              <PlayerCard player={currentPlayer} />

              <TurnTracker
                currentPlayer={currentPlayer}
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
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default GameScreen;
