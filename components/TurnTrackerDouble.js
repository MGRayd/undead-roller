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
import globalStyles from '../styles/globalStyles';

const TurnTrackerDouble = ({
  currentPlayer,
  turnData,
  onDiceResult,
  onEndTurn,
  statusEffects,
  setStatusEffects,
}) => {
  const toggleEffect = (effect) => {
    setStatusEffects((prev) => ({ ...prev, [effect]: !prev[effect] }));
  };

  return (
    <View style={globalStyles.turnTracker}>
      <Text style={globalStyles.turnTitle}>Turn: {currentPlayer.name}</Text>

      <View style={globalStyles.iconRow}>
        <TouchableOpacity onPress={() => onDiceResult('brains')}>
          <Image source={brainIcon} style={globalStyles.icon} />
          <Text style={globalStyles.iconLabel}>{turnData.brains}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDiceResult('shotguns')}>
          <Image source={shotgunIcon} style={globalStyles.icon} />
          <Text style={globalStyles.iconLabel}>{turnData.shotguns}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDiceResult('greenFootprints')}>
          <Text style={globalStyles.greenFootLabel}>👣</Text>
          <Text style={globalStyles.iconLabel}>{turnData.greenFootprints || 0}</Text>
          {statusEffects.energyDrink && (
            <Text style={globalStyles.convertedNote}>
              +{turnData.greenFootprints || 0} brains
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={globalStyles.effectsContainer}>
        <View style={globalStyles.effectRow}>
          <Text style={globalStyles.effectLabel}>Helmet (4 💥 to bust)</Text>
          <Switch
            value={statusEffects.helmet}
            onValueChange={() => toggleEffect('helmet')}
          />
        </View>
        <View style={globalStyles.effectRow}>
          <Text style={globalStyles.effectLabel}>Energy Drink (👣 = 🧠)</Text>
          <Switch
            value={statusEffects.energyDrink}
            onValueChange={() => toggleEffect('energyDrink')}
          />
        </View>
      </View>

      <Button title="End Turn" onPress={onEndTurn} />
    </View>
  );
};

export default TurnTrackerDouble;
