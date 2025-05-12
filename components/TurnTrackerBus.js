import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Switch,
  StyleSheet,
} from 'react-native';

import brainIcon from '../assets/icons/brain.png';
import shotgunIcon from '../assets/icons/shotgun.png';

const TurnTrackerBus = ({
  currentPlayer,
  turnData,
  onDiceResult,
  onEndTurn,
  schoolBus,
  setSchoolBus,
  applySchoolBusEffect,
}) => {
  const busOptions = [
    { key: 'tripleBrain', label: '🧠🧠🧠 Triple Brain' },
    { key: 'brainShotgun', label: '🧠 + 💥' },
    { key: 'stop', label: '🛑 Stop Sign' },
    { key: 'yield', label: '⚠️ Yield Sign' },
    { key: 'deadEnd', label: '🚧 Dead End' },
    { key: 'runOver', label: '💀 Run Over' },
  ];

  const toggleBusUse = () => {
    if (!schoolBus.locked) {
      setSchoolBus((prev) => ({
        used: !prev.used,
        result: null,
        locked: prev.locked,
      }));
    }
  };

  const selectBusResult = (key) => {
    if (!schoolBus.locked && schoolBus.used) {
      setSchoolBus((prev) => ({
        ...prev,
        result: key,
      }));

      // Apply immediate effects for tripleBrain and brainShotgun
      if (key === 'tripleBrain' || key === 'brainShotgun') {
        applySchoolBusEffect(key);
      }
    }
  };

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

      <View style={styles.effectRow}>
        <Text style={styles.effectLabel}>
          On the Bus? {schoolBus.locked ? '🚫 Locked' : ''}
        </Text>
        <Switch
          value={schoolBus.used}
          onValueChange={toggleBusUse}
          disabled={schoolBus.locked}
        />
      </View>

      {schoolBus.locked && (
        <Text style={styles.lockedNote}>
          💀 You were run over! You can't use the School Bus again this turn.
        </Text>
      )}

      {!schoolBus.locked && schoolBus.used && (
        <View style={styles.schoolBusOptions}>
          <Text style={styles.schoolBusTitle}>Select Bus Result:</Text>
          {busOptions.map((opt) => (
            <TouchableOpacity
              key={opt.key}
              onPress={() => selectBusResult(opt.key)}
              style={[
                styles.busOption,
                schoolBus.result === opt.key && styles.busOptionActive,
              ]}
            >
              <Text style={styles.busOptionText}>{opt.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Button title="End Turn" onPress={onEndTurn} />
    </View>
  );
};

export default TurnTrackerBus;

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
  effectRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  effectLabel: {
    color: '#fff',
  },
  lockedNote: {
    color: '#ff7676',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  schoolBusOptions: {
    marginTop: 10,
  },
  schoolBusTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  busOption: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: '#333',
    borderRadius: 6,
  },
  busOptionActive: {
    backgroundColor: '#555',
  },
  busOptionText: {
    color: '#fff',
  },
});
