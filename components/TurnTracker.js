import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import brainIcon from '../assets/icons/brain.png';
import shotgunIcon from '../assets/icons/shotgun.png';

const TurnTracker = ({ currentPlayer, turnData, onDiceResult, onEndTurn, mode, statusEffects, setStatusEffects }) => {
  const isDoubleFeature = mode === 'doubleFeature';

  return (
    <View style={styles.turnTracker}>
      <Text style={styles.turnTitle}>Turn: {currentPlayer.name}</Text>

      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => onDiceResult('brains')}>
          <Image source={brainIcon} style={styles.icon} />
          <Text style={styles.iconLabel}>{turnData.brains}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDiceResult('shotguns')}>
          <Image source={shotgunIcon} style={styles.icon} />
          <Text style={styles.iconLabel}>{turnData.shotguns}</Text>
        </TouchableOpacity>
      </View>

      <Button title="End Turn" onPress={onEndTurn} />

      {isDoubleFeature && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Status Effects</Text>

          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>Helmet (4 shotguns to bust)</Text>
            <Switch
              value={statusEffects.helmet}
              onValueChange={(val) => setStatusEffects({ ...statusEffects, helmet: val })}
            />
          </View>

          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>Energy Drink (Footprints = Brains)</Text>
            <Switch
              value={statusEffects.energyDrink}
              onValueChange={(val) => setStatusEffects({ ...statusEffects, energyDrink: val })}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default TurnTracker;

const styles = StyleSheet.create({
  turnTracker: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
  },
  turnTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  iconLabel: {
    color: '#fff',
    textAlign: 'center',
  },
  statusContainer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  statusTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  statusItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusLabel: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
    paddingRight: 10,
  },
});
